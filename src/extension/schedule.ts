import {zipObject, cloneDeep, isEqual} from 'lodash';
import {NodeCG} from '../nodecg/nodecg';
import {google} from 'googleapis';
import {Participant, Schedule, Spreadsheet} from '../nodecg/replicants';

export default async (nodecg: NodeCG) => {
	const logger = new nodecg.Logger('schedule');

	const {googleApiKey, spreadsheetId} = nodecg.bundleConfig;
	if (!spreadsheetId) {
		logger.warn('Spreadsheet ID is empty.');
		return;
	}
	if (!googleApiKey) {
		logger.warn('Google API Key is empty.');
		return;
	}

	const scheduleRep = nodecg.Replicant('schedule', {defaultValue: []});
	const currentRunRep = nodecg.Replicant('current-run', {defaultValue: null});
	const nextRunRep = nodecg.Replicant('next-run', {defaultValue: null});
	const checklistRep = nodecg.Replicant('checklist', {defaultValue: []});
	const spreadsheetRep = nodecg.Replicant('spreadsheet', {
		defaultValue: {
			runs: [],
			runners: [],
			commentators: [],
			tournamentMatchTitle: [],
		},
	});

	const sheetsApi = google.sheets({version: 'v4', auth: googleApiKey});

	const fetchSpreadsheet = async () => {
		const res = await sheetsApi.spreadsheets.values.batchGet({
			spreadsheetId,
			// 取得対象のシート名
			ranges: ['ゲーム', '走者', '解説', 'トーナメント'],
		});
		const sheetValues = res.data.valueRanges;
		if (!sheetValues) {
			logger.error("Couldn't get values from spreadsheet");
			return;
		}
		const labelledValues = sheetValues.map((sheet) => {
			if (!sheet.values) {
				return;
			}
			const [labels, ...contents] = sheet.values;
			return contents.map((content) => zipObject(labels, content));
		});
		const newSpreadsheet = {
			runs: labelledValues[0],
			runners: labelledValues[1],
			commentators: labelledValues[2],
			tournamentMatchTitle: labelledValues[3],
		};
		if (isEqual(spreadsheetRep.value, newSpreadsheet)) {
			return;
		}
		spreadsheetRep.value = newSpreadsheet as Spreadsheet;
	};

	const resetChecklist = () => {
		if (checklistRep.value) {
			checklistRep.value = checklistRep.value.map((item) => ({
				...item,
				complete: false,
			}));
		}
	};

	const updateCurrentRun = (index: number) => {
		if (!scheduleRep.value) {
			return;
		}
		resetChecklist();
		const newCurrentRun = scheduleRep.value[index];
		if (!newCurrentRun) {
			return;
		}
		currentRunRep.value = cloneDeep(newCurrentRun);
		nextRunRep.value = cloneDeep(scheduleRep.value[index + 1]);
	};

	const seekToNextRun = () => {
		if (!currentRunRep.value || !scheduleRep.value) {
			return;
		}
		const currentIndex = currentRunRep.value.index;
		if (currentIndex === undefined || currentIndex < 0) {
			updateCurrentRun(0);
			return;
		}
		if (currentIndex >= scheduleRep.value.length - 1) {
			return;
		}
		resetChecklist();
		currentRunRep.value = cloneDeep(nextRunRep.value);
		nextRunRep.value = cloneDeep(scheduleRep.value[currentIndex + 2]);
	};

	const seekToPreviousRun = () => {
		if (!currentRunRep.value || !scheduleRep.value) {
			return;
		}
		const currentIndex = currentRunRep.value.index;
		if (currentIndex === undefined || currentIndex < 0) {
			updateCurrentRun(0);
			return;
		}
		if (currentIndex === 0) {
			return;
		}
		resetChecklist();
		nextRunRep.value = cloneDeep(currentRunRep.value);
		currentRunRep.value = cloneDeep(scheduleRep.value[currentIndex - 1]);
	};

	nodecg.listenFor('nextRun', (_, cb) => {
		seekToNextRun();
		if (cb && !cb.handled) {
			cb(null);
		}
	});

	nodecg.listenFor('previousRun', (_, cb) => {
		seekToPreviousRun();
		if (cb && !cb.handled) {
			cb(null);
		}
	});

	nodecg.listenFor('setCurrentRunByIndex', (index, cb) => {
		updateCurrentRun(index);
		if (cb && !cb.handled) {
			cb(null);
		}
	});

	nodecg.listenFor('modifyRun', (data, cb) => {
		if (!currentRunRep.value || !nextRunRep.value) {
			return;
		}

		let msg: string | null = null;

		try {
			switch (data.pk) {
				case currentRunRep.value.pk:
					currentRunRep.value = {...currentRunRep.value, ...data};
					break;
				case nextRunRep.value.pk:
					nextRunRep.value = {...nextRunRep.value, ...data};
					break;
				default:
					nodecg.log.warn('[modifyRun] run not found:', data);
					msg = 'Error: Run not found';
					break;
			}
			if (cb && !cb.handled) {
				cb(msg);
			}
		} catch (error) {
			if (cb && !cb.handled) {
				cb(error.message);
			}
		}
	});

	// Prevent empty current run
	scheduleRep.on('change', (newVal) => {
		const isCurrentRunEmpty =
			!currentRunRep.value || !currentRunRep.value.pk;
		if (isCurrentRunEmpty) {
			const currentRun = newVal[0];
			if (currentRun) {
				currentRunRep.value = cloneDeep(currentRun);
				nextRunRep.value = cloneDeep(newVal[1]);
			}
		}
	});

	// スプレッドシートから取得
	fetchSpreadsheet();
	// 定期的にスプレッドシートから取得
	setInterval(fetchSpreadsheet, 10 * 1000);

	spreadsheetRep.on('change', (spreadsheet) => {
		try {
			const {runs, runners, commentators} = spreadsheet;
			const schedule: Schedule = runs.map((run, index) => {
				const runnersData: Participant[] = [];
				for (const runnerId of [
					run.runner1,
					run.runner2,
					run.runner3,
					run.runner4,
				]) {
					const runner = runners.find((r) => r.id === runnerId);
					if (runner && runner.name) {
						runnersData.push({
							name: runner.name,
							twitch: runner.twitch,
							nico: runner.nico,
							twitter: runner.twitter,
						});
					}
				}
				const commentatorData: Participant[] = [];
				for (const commentatorId of [
					run.commentator1,
					run.commentator2,
					run.commentator3,
					run.commentator4,
				]) {
					const commentator = commentators.find(
						(r) => r.id === commentatorId,
					);
					if (commentator && commentator.name) {
						commentatorData.push({
							name: commentator.name,
							twitch: commentator.twitch,
							nico: commentator.nico,
							twitter: commentator.twitter,
						});
					}
				}

				return {
					pk: Number(run.id),
					index,
					title: run.title,
					englishTitle: run['title english'],
					raceGenre: run['レースジャンル'],
					category: run.category,
					platform: run.platform,
					runDuration: run.runDuration,
					setupDuration: run.setupDuration,
					runners: runnersData,
					commentators: commentatorData,
				};
			});
			scheduleRep.value = schedule;
		} catch (err) {
			nodecg.log.error('Error while fetching schedule from spreadsheet');
			nodecg.log.error(err);
		}
	});
};

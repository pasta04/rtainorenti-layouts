// import {setInterval} from 'timers';
import {NodeCG} from '../nodecg';
import {Participant, Schedule} from '../../nodecg/replicants';
import {google} from 'googleapis';
import {Dictionary, zipObject} from 'lodash';

/**
 * スプレッドシートからゲーム情報、解説を取得
 * @param nodecg
 * @returns
 */
export const importFromSheet = (nodecg: NodeCG) => {
	const logger = new nodecg.Logger('schedule:sheets');

	const {spreadsheetId, googleApiKey} = nodecg.bundleConfig;
	if (!spreadsheetId) {
		logger.warn('Spreadsheet is empty');
		return;
	}
	if (!googleApiKey) {
		logger.warn('Google API key config is empty');
		return;
	}

	const sheetsApi = google.sheets({
		version: 'v4',
		auth: googleApiKey,
	});

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
			return contents.map((content) => zipObject(labels as string[], content));
		});
		const newSpreadsheet = {
			runs: labelledValues[0] as Dictionary<any>[],
			runners: labelledValues[1] as Dictionary<any>[],
			commentators: labelledValues[2] as Dictionary<any>[],
			tournamentMatchTitle: labelledValues[3] as Dictionary<any>[],
		};

		return newSpreadsheet;
	};

	logger.warn('Using SpreadSheet to import schedule');

	const scheduleRep = nodecg.Replicant('schedule');

	const updateSchedule = async () => {
		try {
			logger.info('run updateSchedule');

			const [sheetsData] = await Promise.all([fetchSpreadsheet()]);
			if (!sheetsData) {
				return;
			}
			logger.info('fetch done');
			const {runs, runners, commentators} = sheetsData;

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
					const commentator = commentators.find((r) => r.id === commentatorId);
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
					date: '', // スプレッドシートのみの時は特に列が無い
					runDuration: run.runDuration,
					setupDuration: run.setupDuration,
					runners: runnersData,
					commentators: commentatorData,
				};
			});

			scheduleRep.value = schedule;
		} catch (error) {
			logger.error('Failed to fetch schedule');
			logger.error(error);
		}
	};

	updateSchedule();
	setInterval(updateSchedule, 10 * 1000);
};

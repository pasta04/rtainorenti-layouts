// import {setInterval} from 'timers';
import {NodeCG} from '../nodecg';
import got from 'got';
import moment from 'moment';
import {Participant} from '../../nodecg/replicants';
import {google} from 'googleapis';
import {padStart, zipObject} from 'lodash';
import {OengusScheduleApi} from '../../nodecg/oengus';

const fetchSchedule = async (
	marathonId: string,
): Promise<OengusScheduleApi> => {
	const res = await got.get(
		`https://oengus.io/api/marathons/${marathonId}/schedule`,
		{json: true},
	);
	return res.body;
};

const padZero = (num: number) => {
	return padStart(String(num), 2, '0');
};

const formatDuration = (duration: string) => {
	const momentDuration = moment.duration(duration);
	const hours = momentDuration.hours();
	const minutes = momentDuration.minutes();
	const seconds = momentDuration.seconds();
	return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
};

/**
 * Oengusからゲーム情報、スプレッドシートから解説を取得
 * @param nodecg
 * @returns
 */
export const importFromOengus = (nodecg: NodeCG) => {
	const logger = new nodecg.Logger('schedule:oengus');

	const {oengusMarathonId, spreadsheetId, googleApiKey} = nodecg.bundleConfig;
	if (!oengusMarathonId) {
		logger.warn('Oengus config is empty');
		return;
	}
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
	/** 解説情報を取得 */
	const fetchCommentators = async (): Promise<{
		gameCategory: string;
		name: string;
	}[]> => {
		// logger.info('run fetchCommentators');

		// 1行に1ゲームの全解説者が詰まっている

		const res = await sheetsApi.spreadsheets.values.batchGet({
			spreadsheetId: spreadsheetId,
			ranges: ['RRR走者情報'],
		});
		const sheetValues = res.data.valueRanges;
		if (!sheetValues || !sheetValues[0] || !sheetValues[0].values) {
			throw new Error('Could not get values from spreadsheet');
		}
		const [labels, ...contents] = sheetValues[0].values;
		if (!labels) {
			throw new Error('Could not get values from spreadsheet');
		}
		let rawData1 = contents.map((content) => zipObject(labels, content));
		const rawData2: {gameCategory: string; name: string}[][] = rawData1.map(
			(el) => {
				const result = [];
				const gameCategory = el['ゲーム名'];
				const commentary1 = el['解説者1 お名前'];
				const commentary2 = el['解説者2 お名前'];

				if (commentary1) {
					result.push({
						gameCategory,
						name: commentary1,
					});
				}

				if (commentary2) {
					result.push({
						gameCategory,
						name: commentary2,
					});
				}

				return result;
			},
		);

		let rawData3 = rawData2.reduce((pre, current) => {
			pre.push(...current);
			return pre;
		}, []);

		// logger.info(rawData3);
		return rawData3;
	};

	logger.warn('Using Oengus to import schedule');

	const scheduleRep = nodecg.Replicant('schedule');

	const updateSchedule = async () => {
		try {
			logger.info('run updateSchedule');

			const [schedule, rawCommentators] = await Promise.all([
				fetchSchedule(oengusMarathonId),
				fetchCommentators(),
			]);
			logger.info('fetch done');

			scheduleRep.value = schedule.lines.map((run, index) => {
				const runners: Participant[] = run.runners.map((runner) => {
					const twitch = runner.connections.find(
						(c) => c.platform === 'TWITCH',
					);
					const twitter = runner.connections.find(
						(c) => c.platform === 'TWITTER',
					);
					const nico = runner.connections.find((c) => c.platform === 'NICO');

					return {
						name: runner.usernameJapanese || runner.username,
						twitch: twitch ? twitch.username : undefined,
						twitter: twitter ? twitter.username : undefined,
						nico: nico ? nico.username : undefined,
					};
				});
				const gameCategory = run.gameName.trim();
				const commentators = rawCommentators.filter(
					(c) => c.gameCategory === gameCategory,
				);

				// logger.info(run.gameName);

				return {
					pk: run.id,
					index,
					title: run.gameName,
					englishTitle: '', // 今のところ使わない
					category: run.categoryName,
					platform: run.console,
					runDuration: formatDuration(run.estimate),
					setupDuration: formatDuration(run.setupTime),
					runners,
					commentators: commentators.map((c) => ({
						name: c.name,
						// twitch: c.twitch,
						// twitter: c.twitter,
						// nico: c.nico,
					})),
				};
			});
		} catch (error) {
			logger.error('Failed to fetch schedule');
			logger.error(error);
		}
	};

	updateSchedule();
	// setInterval(updateSchedule, 10 * 1000);
};

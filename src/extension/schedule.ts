import {cloneDeep} from 'lodash';
import {NodeCG} from '../nodecg/nodecg';
import {importFromOengus} from './schedule-import/oengus';
import {importFromSheet} from './schedule-import/sheet';

export default async (nodecg: NodeCG) => {
	// const logger = new nodecg.Logger('schedule');

	// スケジュール取得、及び定期実行
	if (nodecg.bundleConfig.oengusMarathonId) {
		importFromOengus(nodecg);
	} else {
		importFromSheet(nodecg);
	}

	const scheduleRep = nodecg.Replicant('schedule', {defaultValue: []});
	const currentRunRep = nodecg.Replicant('current-run', {defaultValue: null});
	const nextRunRep = nodecg.Replicant('next-run', {defaultValue: null});
	const checklistRep = nodecg.Replicant('checklist', {defaultValue: []});

	/** チェックリスト */
	const resetChecklist = () => {
		if (checklistRep.value) {
			checklistRep.value = checklistRep.value.map((item) => ({
				...item,
				complete: false,
			}));
		}
	};

	/** ゲーム情報を更新。次へとか前へ押した時 */
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
		const next = scheduleRep.value[index + 1];
		if (next) {
			nextRunRep.value = cloneDeep(next);
		} else {
			nextRunRep.value = {
				commentators: [],
				englishTitle: '',
				index: 99999,
				pk: 99999,
				runDuration: '',
				runners: [],
				setupDuration: '',
				title: '',
			};
		}
	};

	/** 次へボタン */
	const seekToNextRun = () => {
		if (!currentRunRep.value || !scheduleRep.value) {
			return;
		}
		const currentIndex = currentRunRep.value.index;
		if (currentIndex === undefined || currentIndex < 0) {
			updateCurrentRun(0);
			return;
		}
		// 既に最後ならもう押せない
		if (currentIndex >= scheduleRep.value.length - 1) {
			return;
		}
		resetChecklist();
		currentRunRep.value = cloneDeep(nextRunRep.value);
		const next = scheduleRep.value[currentIndex + 2];
		if (next) {
			nextRunRep.value = cloneDeep(next);
		} else {
			nextRunRep.value = {
				commentators: [],
				englishTitle: '',
				index: 99999,
				pk: 99999,
				runDuration: '',
				runners: [],
				setupDuration: '',
				title: '',
			};
		}
	};

	/** 前へボタン */
	const seekToPreviousRun = () => {
		if (!currentRunRep.value || !scheduleRep.value) {
			return;
		}
		const currentIndex = currentRunRep.value.index;
		if (currentIndex === undefined || currentIndex < 0) {
			updateCurrentRun(0);
			return;
		}
		// 既に先頭ならそのまま
		if (currentIndex === 0) {
			return;
		}
		resetChecklist();
		nextRunRep.value = cloneDeep(currentRunRep.value);
		const current = scheduleRep.value[
			currentIndex - 1
		] as typeof currentRunRep.value;
		currentRunRep.value = cloneDeep(current);
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
		const isCurrentRunEmpty = !currentRunRep.value || !currentRunRep.value.pk;
		if (isCurrentRunEmpty) {
			const currentRun = newVal[0];
			if (currentRun) {
				currentRunRep.value = cloneDeep(currentRun);
				nextRunRep.value = cloneDeep(newVal[1] as typeof nextRunRep.value);
			}
		}
	});
};

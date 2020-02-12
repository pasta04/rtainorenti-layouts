import {Run} from './replicants';

export type MessageMap = {
	completeRunner: {data: {index: number; forfeit: boolean}};
	resumeRunner: {data: number};
	editTime: {data: {index: number | 'master'; newTime: string}};
	startTimer: {data?: false};
	stopTimer: {};
	resetTimer: {};
	setCurrentRunByIndex: {data: number};
	nextRun: {};
	previousRun: {};
	modifyRun: {data: Run; error: string};
	/** チェックリストの切り替え */
	toggleCheckbox: {data: {name: string; checked: boolean}};
	resetChecklist: {};
};

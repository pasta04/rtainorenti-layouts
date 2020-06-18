/* tslint:disable */

export interface Spreadsheet {
	runs: {
		id: string;
		/** ゲームタイトル */
		title: string;
		/** Twitch用ゲームタイトル英名 */
		'title english': string;
		/** 機種 */
		platform?: string;
		/** RTAカテゴリ */
		category?: string;
		/** レースジャンル */
		raceGenre?: string;
		/** EST */
		runDuration: string;
		/** セットアップタイム */
		setupDuration: string;
		/** 走者1 */
		runner1?: string;
		/** 走者2 */
		runner2?: string;
		/** 走者3 */
		runner3?: string;
		/** 走者4 */
		runner4?: string;
		/** 解説1 */
		commentator1?: string;
		/** 解説2 */
		commentator2?: string;
		/** 解説3 */
		commentator3?: string;
		/** 解説4 */
		commentator4?: string;
		[k: string]: any;
	}[];
	runners: {
		id: string;
		name: string;
		twitter?: string;
		nico?: string;
		twitch?: string;
		[k: string]: any;
	}[];
	commentators: {
		id: string;
		name: string;
		twitter?: string;
		nico?: string;
		twitch?: string;
		[k: string]: any;
	}[];
	tournamentMatchTitle: {
		id: string;
		matchTitle: string;
	}[];
}

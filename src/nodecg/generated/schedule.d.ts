/* tslint:disable */

export type Schedule = {
	pk: number;
	index: number;
	/** ゲームタイトル(日) */
	title: string;
	/** ゲームタイトル(英)。Twitch更新に使う。 */
	englishTitle: string;
	/** カテゴリ */
	category?: string;
	/** 機種 */
	platform?: string;
	/** EST */
	runDuration: string;
	/** 開始予定時刻 */
	date: string;
	/** セットアップタイム */
	setupDuration: string;
	/** 走者 */
	runners: {
		/** 走者名 */
		name: string;
		/** TwitchID */
		twitch?: string;
		/** ニコニココミュニティID */
		nico?: string;
		/** Twitter ScreenName */
		twitter?: string;
	}[];
	/** 解説 */
	commentators: {
		name: string;
		twitch?: string;
		nico?: string;
		twitter?: string;
	}[];
}[];

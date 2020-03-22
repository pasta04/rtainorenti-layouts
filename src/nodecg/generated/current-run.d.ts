/* tslint:disable */

export type CurrentRun = null | {
	pk: number;
	index: number;
	/** ゲーム名 */
	title: string;
	englishTitle: string;
	category?: string;
	platform?: string;
	runDuration: string;
	setupDuration: string;
	runners: {
		/** 走者名 */
		name: string;
		/** Twitch ID */
		twitch?: string;
		/** ニコニココミュニティID */
		nico?: string;
		/** Twitter ID */
		twitter?: string;
	}[];
	/** 解説 */
	commentators: {
		name: string;
		twitch?: string;
		nico?: string;
		twitter?: string;
	}[];
};

/* tslint:disable */

/** .nodecg/cfgに置く設定ファイル */
export type Configschema = {
	/** 配信先のTwitch ID */
	twitchId: string;
	/** 配信タイトルの先頭に付与する文字 */
	broadcastTitlePrefix: string;
	/** ロゴとして表示する内容 */
	logo: {
		/** メインタイトル */
		title: string;
		/** サブタイトル */
		subtitle: string;
	};
	/** OengusのID */
	oengusMarathonId: string;
	/** Google APIのkey */
	googleApiKey?: string;
	/** スプレッドシートのID */
	spreadsheetId?: string;
	/** Challonge APIのkey */
	challongeApiKey?: string;
};

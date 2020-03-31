import {ChallongeMatch} from '../challonge';

/** Challongeのトーナメント情報にプレイヤー名を加えたもの */
export type Challonge = {
	/**
	 * トーナメントのID
	 * @description URL末尾のアレ
	 */
	tournamentId: string;
	/** トーナメントタイトル */
	tournamentName: string;
	/** トーナメントのデータ */
	data: {
		match: ChallongeMatch & {
			/** 1Pのプレイヤー名 */
			player1_name: string;
			/** 2Pのプレイヤー名 */
			player2_name: string;
		};
	}[];
};

/** 現在のトーナメント */
export type TournamentCurrent = {
	/** 表示中のN回戦表記 */
	title: string;
	/** プレイヤー1のラウンド取得数 */
	runner1: {
		round: number;
	};
	/** プレイヤー2のラウンド取得数 */
	runner2: {
		round: number;
	};
};

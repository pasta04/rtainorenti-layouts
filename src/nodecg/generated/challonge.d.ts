import {ChallongeMatch} from '../challonge';

/** Challongeのトーナメント情報にプレイヤー名を加えたもの */
export type Challonge = {
	tournamentName: string;
	data: {
		match: ChallongeMatch & {
			player1_name: string;
			player2_name: string;
		};
	}[];
};

/** 現在のトーナメント */
export type TournamentCurrent = {
	/** N回戦みたいな表示 */
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

import got from 'got';
import {NodeCG} from '../nodecg/nodecg';
import {
	ChallongeMatchShow,
	ChallongeParticipants,
	ChallongeTournamentsShow,
} from '../nodecg/challonge';

/** Challongeのトーナメント情報を取得する */
export const challonge = (nodecg: NodeCG) => {
	const {challongeApiKey} = nodecg.bundleConfig;
	const challongeRep = nodecg.Replicant('challonge', {
		defaultValue: {
			tournamentId: '',
			tournamentName: '',
			data: [],
		},
	});

	const log = new nodecg.Logger('challonge');

	const fetchTournament = async (tournamentId: string) => {
		const url = `https://api.challonge.com/v1/tournaments/${tournamentId}.json?api_key=${challongeApiKey}`;
		log.debug(`url access: ${url}`);
		const {body} = await got(url);
		const json: ChallongeTournamentsShow = JSON.parse(body);
		log.debug(JSON.stringify(json, null, '  '));
		return json;
	};

	const fetchParticipants = async (tournamentId: string) => {
		const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json?api_key=${challongeApiKey}`;
		log.debug(`url access: ${url}`);
		const {body} = await got(url);
		const json: ChallongeParticipants = JSON.parse(body);
		log.debug(JSON.stringify(json, null, '  '));
		return json;
	};

	const fetchMatch = async (tournamentId: string) => {
		const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${challongeApiKey}`;
		log.debug(`url access: ${url}`);
		const {body} = await got(url);
		const json: ChallongeMatchShow = JSON.parse(body);
		log.debug(JSON.stringify(json, null, '  '));
		return json;
	};

	const fetchTournamentInfo = async () => {
		const tournamentId: string = challongeRep.value.tournamentId;
		if (!tournamentId) return;

		// 参加者を取得
		const participants = await fetchParticipants(tournamentId);
		const playerIdToName: {[id: number]: string} = {};
		participants.map((pa) => {
			playerIdToName[pa.participant.id] = pa.participant.display_name;
		});

		// トーナメント情報を取得
		const matchInfo = await fetchMatch(tournamentId);

		// トーナメント情報と走者情報をマージ
		const newInfo = matchInfo.map((ma) => {
			return {
				match: {
					player1_name: playerIdToName[ma.match.player1_id],
					player2_name: playerIdToName[ma.match.player2_id],
					...ma.match,
				},
			};
		});

		challongeRep.value = {
			...challongeRep.value,
			data: newInfo,
		};
	};

	/** 画面で入力されたIDとタイトルを格納する */
	const fetchTournamentInfoHandler = async (tournamentId: string) => {
		log.info(`tournamentId: ${tournamentId}`);
		// タイトルを取得
		try {
			const tournament = await fetchTournament(tournamentId);
			const tournamentName = tournament ? tournament.tournament.name : '';
			challongeRep.value = {
				tournamentId,
				tournamentName,
				data: [],
			};
			await fetchTournamentInfo();
		} catch (e) {
			log.error(e);
			challongeRep.value = {
				tournamentId: '',
				tournamentName: '',
				data: [],
			};
		}
	};
	// 定期的に取得
	setInterval(fetchTournamentInfo, 10 * 1000);

	nodecg.listenFor('fetchTournament', fetchTournamentInfoHandler);
};

export const tournamentCurrent = (nodecg: NodeCG) => {
	const rep = nodecg.Replicant('tournamentCurrent', {
		defaultValue: {
			title: '',
			runner1: {
				round: 0,
			},
			runner2: {
				round: 0,
			},
			runner3: {
				round: 0,
			},
			runner4: {
				round: 0,
			},
		},
	});

	// 試合名更新
	const editMatchname = (payload: string) => {
		rep.value = {
			...rep.value,
			title: payload,
		};
	};

	const editMatchRound = (payload: {index: number; round: number}) => {
		rep.value = {
			...rep.value,
			runner1: {
				round: payload.index === 0 ? payload.round : rep.value.runner1.round,
			},
			runner2: {
				round: payload.index === 1 ? payload.round : rep.value.runner2.round,
			},
			runner3: {
				round: payload.index === 2 ? payload.round : rep.value.runner3.round,
			},
			runner4: {
				round: payload.index === 3 ? payload.round : rep.value.runner4.round,
			},
		};
	};

	nodecg.listenFor('editMatchname', editMatchname);
	nodecg.listenFor('editMatchRound', editMatchRound);
};

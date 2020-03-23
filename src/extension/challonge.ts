import got from 'got';
import {NodeCG} from '../nodecg/nodecg';
import {
	ChallongeMatchResponse,
	ChallongeParticipants,
} from '../nodecg/challonge';

export const challonge = (nodecg: NodeCG) => {
	const {challongeApiKey} = nodecg.bundleConfig;
	const challongeRep = nodecg.Replicant('challonge', {
		defaultValue: {
			tournamentName: '',
			data: [],
		},
	});

	const log = new nodecg.Logger('challonge');

	const fetchParticipants = async (tournamentId: string) => {
		const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json?api_key=${challongeApiKey}`;
		log.info(`url access: ${url}`);
		const {body} = await got(url);
		const json: ChallongeParticipants = JSON.parse(body);
		return json;
	};

	const fetchMatch = async (tournamentId: string) => {
		const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${challongeApiKey}`;
		log.info(`url access: ${url}`);
		const {body} = await got(url);
		const json: ChallongeMatchResponse = JSON.parse(body);
		return json;
	};

	const fetchTournament = async (tournamentId: string) => {
		// 参加者を取得
		const participants = await fetchParticipants(tournamentId);
		const playerIdToName: {[id: number]: string} = {};
		participants.map((pa) => {
			playerIdToName[pa.participant.id] = pa.participant.name;
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
			tournamentName: '',
			data: newInfo,
		};
	};

	nodecg.listenFor('fetchTournament', fetchTournament);
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
				round:
					payload.index === 0
						? payload.round
						: rep.value.runner1.round,
			},
			runner2: {
				round:
					payload.index === 1
						? payload.round
						: rep.value.runner2.round,
			},
		};
	};

	nodecg.listenFor('editMatchname', editMatchname);
	nodecg.listenFor('editMatchRound', editMatchRound);
};

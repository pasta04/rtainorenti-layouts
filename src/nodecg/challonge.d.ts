export type ChallongeMatchResponse = {
	match: ChallongeMatch;
}[];

export type ChallongeMatch = {
	attachment_count: null;
	created_at: string;
	group_id: null;
	has_attachment: false;
	id: number;
	identifier: string;
	location: null;
	loser_id: null;
	player1_id: number;
	player1_is_prereq_match_loser: false;
	player1_prereq_match_id: null;
	player1_votes: null;
	player2_id: number;
	player2_is_prereq_match_loser: false;
	player2_prereq_match_id: null;
	player2_votes: null;
	round: number;
	scheduled_time: null;
	started_at: string;
	state: string;
	tournament_id: number;
	underway_at: null;
	updated_at: string;
	winner_id: null;
	prerequisite_match_ids_csv: string;
	suggested_play_order: number;
	forfeited: null;
	scores_csv: string;
};

export type ChallongeParticipants = {
	participant: {
		/** プレイヤーID */
		id: number;
		/** 参加しているトーナメントのID */
		tournament_id: number;
		/** プレイヤー名。空文字のこともある。 */
		name: string;
		/** Challongeのユーザ名 */
		challonge_username: string | null;
		username: string | null;
		display_name: string;
		display_name_with_invitation_email_address: string;

		seed: number;
		active: boolean;
		/**
		 * アカウント作成日時?
		 * @example "2019-03-23T06:10:49.164+01:00"
		 */
		created_at: string;
		invite_email: null;
		final_rank: number | null;
		misc: null;
		icon: null;
		on_waiting_list: boolean;
		invitation_id: null;

		checked_in_at: null;
		group_id: null;
		updated_at: string;
		challonge_email_address_verified: null;
		removable: boolean;
		participatable_or_invitation_attached: boolean;
		confirm_remove: boolean;
		invitation_pending: boolean;
		email_hash: null;
		attached_participatable_portrait_url: null;
		can_check_in: boolean;
		checked_in: boolean;
		reactivatable: boolean;
	};
}[];

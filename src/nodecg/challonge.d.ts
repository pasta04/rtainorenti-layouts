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
		active: boolean;
		checked_in_at: null;
		created_at: string;
		final_rank: null;
		group_id: null;
		icon: null;
		/** プレイヤーID */
		id: number;
		invitation_id: null;
		invite_email: null;
		misc: null;
		/** プレイヤー名 */
		name: string;
		on_waiting_list: boolean;
		seed: number;
		tournament_id: number;
		updated_at: string;
		challonge_username: null;
		challonge_email_address_verified: null;
		removable: boolean;
		participatable_or_invitation_attached: boolean;
		confirm_remove: boolean;
		invitation_pending: boolean;
		display_name_with_invitation_email_address: string;
		email_hash: null;
		username: null;
		attached_participatable_portrait_url: null;
		can_check_in: boolean;
		checked_in: boolean;
		reactivatable: boolean;
	};
}[];

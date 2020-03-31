export type ChallongeMatchShow = {
	match: ChallongeMatch;
}[];

export type ChallongeMatch = {
	attachment_count: null;
	created_at: string;
	group_id: null;
	has_attachment: boolean;
	id: number;
	identifier: string;
	location: null;
	loser_id: null;
	player1_id: number;
	player1_is_prereq_match_loser: boolean;
	player1_prereq_match_id: null;
	player1_votes: null;
	player2_id: number;
	player2_is_prereq_match_loser: boolean;
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

export type ChallongeTournamentsShow = {
	tournament: {
		accept_attachments: boolean;
		allow_participant_match_reporting: boolean;
		anonymous_voting: boolean;
		category: null;
		check_in_duration: null;
		completed_at: null;
		/** @example "2015-01-19T16:47:30-05:00" */
		created_at: string;
		created_by_api: boolean;
		credit_capped: boolean;
		/** 詳細欄のテキスト */
		description: string;
		game_id: number;
		group_stages_enabled: boolean;
		hide_forum: boolean;
		hide_seeds: boolean;
		hold_third_place_match: boolean;
		id: number;
		max_predictions_per_user: number;
		/** トーナメントタイトル */
		name: string;
		notify_users_when_matches_open: boolean;
		notify_users_when_the_tournament_ends: boolean;
		open_signup: boolean;
		participants_count: number;
		prediction_method: number;
		predictions_opened_at: null;
		private: boolean;
		progress_meter: number;
		/** @example "1.0" */
		pts_for_bye: string;
		/** @example "0.0" */
		pts_for_game_tie: string;
		/** @example "0.0" */
		pts_for_game_win: string;
		/** @example "0.5" */
		pts_for_match_tie: string;
		/** @example "1.0" */
		pts_for_match_win: string;
		quick_advance: boolean;
		/** @example "match wins" */
		ranked_by: string;
		require_score_agreement: boolean;
		/** @example "0.0" */
		rr_pts_for_game_tie: string;
		/** @example "0.0" */
		rr_pts_for_game_win: string;
		/** @example "0.5" */
		rr_pts_for_match_tie: string;
		/** @example "1.0" */
		rr_pts_for_match_win: string;
		sequential_pairings: boolean;
		show_rounds: boolean;
		/** 参加登録の上限数 */
		signup_cap: number | null;
		/**
		 * 開始日時
		 * @example "2020-04-11T20:00:00.000+09:00"
		 */
		start_at: string | null;
		/** @example "2015-01-19T16:57:17-05:00" */
		started_at: string;
		started_checking_in_at: null;
		/** @example "underway" */
		state: string;
		swiss_rounds: number;
		teams: boolean;
		tie_breaks: ['match wins vs tied', 'game wins', 'points scored'];
		tournament_type:
			| 'single elimination'
			| 'double elimination'
			| 'round robin';
		/** @example "2015-01-19T16:57:17-05:00" */
		updated_at: string;
		/**
		 * 文字列のトーナメントID
		 * @example "sample_tournament_1"
		 */
		url: string;
		/** 詳細欄のテキスト */
		description_source: string;
		subdomain: null;
		/** @example "http://challonge.com/sample_tournament_1" */
		full_challonge_url: string;
		/** @example "http://images.challonge.com/sample_tournament_1.png" */
		live_image_url: string;
		/** @example "https://challonge.com/tournaments/signup/xxxxxxx" */
		sign_up_url: string | null;
		review_before_finalizing: boolean;
		accepting_predictions: boolean;
		participants_locked: boolean;
		/**
		 * ゲーム名
		 * @example "Table Tennis"
		 */
		game_name: string;
		participants_swappable: boolean;
		team_convertable: boolean;
		group_stages_were_started: boolean;
	};
};

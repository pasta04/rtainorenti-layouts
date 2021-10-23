/* tslint:disable */

export interface Twitch {
	accessToken?: string;
	channelId?: string;
	refresh?: {
		refreshToken: string;
		refreshAt: number;
	};
}

export type TwitchSearchGames = {
	data: {
		id: string;
		name: string;
		box_art_url: string;
	}[];
	pagination: {
		cursor: string;
	};
};

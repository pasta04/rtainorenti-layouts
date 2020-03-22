/* tslint:disable */

export interface Twitch {
	accessToken?: string;
	channelId?: string;
	refresh?: {
		refreshToken: string;
		refreshAt: number;
	};
}

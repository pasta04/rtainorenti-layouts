/* tslint:disable */

export interface Spreadsheet {
	runs: {
		id: string;
		title: string;
		'title english': string;
		platform?: string;
		category?: string;
		runDuration: string;
		setupDuration: string;
		runner1?: string;
		runner2?: string;
		runner3?: string;
		commentator1?: string;
		commentator2?: string;
		[k: string]: any;
	}[];
	runners: {
		id: string;
		name: string;
		twitter?: string;
		nico?: string;
		twitch?: string;
		[k: string]: any;
	}[];
	commentators: {
		id: string;
		name: string;
		twitter?: string;
		nico?: string;
		twitch?: string;
		[k: string]: any;
	}[];
	tournamentMatchTitle: {
		id: string;
		matchTitle: string;
	}[];
}

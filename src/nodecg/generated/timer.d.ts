/* tslint:disable */

export interface Timer {
	raw: number;
	hours: number;
	minutes: number;
	seconds: number;
	formatted: string;
	timestamp: number;
	timerState: 'Finished' | 'Running' | 'Stopped';
	results: (null | {
		[k: string]: any;
	})[];
	forfeit: boolean;
	[k: string]: any;
}

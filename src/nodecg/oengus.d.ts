export type OengusScheduleApi = {
	id: number;
	lines: OengusSchedule[];
};

type OengusSchedule = {
	id: number;
	gameName: string;
	console: string;
	emulated: boolean;
	ratio: string;
	categoryName: string;
	estimate: string;
	setupTime: string;
	setupBlock: boolean;
	customRun: boolean;
	position: number;
	categoryId: number;
	type: string;
	runners: OengusRunner[];
	setupBlockText: string | null;
	date: string;
	customDataDTO: null;
};

type OengusRunner = {
	id: number;
	username: string;
	usernameJapanese: string | null;
	enabled: boolean;
	roles: string[];
	connections: Connection[];
	pronouns: string | null;
	country: string | null;
	languagesSpoken: string | null;
};

type Connection = {
	id: number;
	platform: 'DISCORD' | 'SPEEDRUNCOM' | 'TWITCH' | 'TWITTER' | 'NICO';
	username: string;
};

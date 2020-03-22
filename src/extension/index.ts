import 'source-map-support/register';
import {checklist} from './checklist';
import schedule from './schedule';
import {timekeeping} from './timekeeping';
import {NodeCG} from '../nodecg/nodecg';
import {twitch} from './twitch';
import {challonge, tournament} from './challonge';

export = (nodecg: NodeCG) => {
	checklist(nodecg);
	schedule(nodecg);
	timekeeping(nodecg);
	twitch(nodecg);
	challonge(nodecg);
	tournament(nodecg);
};

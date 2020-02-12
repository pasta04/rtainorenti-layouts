import 'source-map-support/register';
import {checklist} from './checklist';
import schedule from './schedule';
import {timekeeping} from './timekeeping';
import {NodeCG} from './nodecg';
import {twitch} from './twitch';

export = (nodecg: NodeCG) => {
	checklist(nodecg);
	schedule(nodecg);
	timekeeping(nodecg);
	twitch(nodecg);
};

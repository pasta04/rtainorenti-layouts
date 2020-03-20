import {CreateNodecgInstance} from 'ts-nodecg/server';

import {ReplicantMap} from './replicants';
import {MessageMap} from './messages';
import {Configschema} from './generated/configschema';

export type NodeCG = CreateNodecgInstance<
	'rtainorenti-layouts',
	Configschema,
	ReplicantMap,
	MessageMap
>;

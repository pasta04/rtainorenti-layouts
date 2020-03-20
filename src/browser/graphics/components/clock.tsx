import '../styles/common.css';

import React from 'react';
import {makeStyles} from '@material-ui/core';
import moment from 'moment';
import useInterval from '@use-it/interval';

const useStyles = makeStyles({
	root: {},
	logoArea: {
		position: 'absolute',
		top: 10,
		left: 5,
	},
	/** 現在時刻 */
	nowClock: {
		position: 'absolute',
		top: 10,
		left: 1400,
		fontSize: 50,
		color: 'white',
		fontFamily: 'PressStart2P',
		textAlign: 'center',
	},
});

export const Clock: React.SFC = () => {
	const classes = useStyles({});

	// 現在時刻
	const [now, setNow] = React.useState<number>(new Date().getTime());
	useInterval(() => {
		setNow(new Date().getTime());
	}, 100);

	return (
		<div className={classes.root}>
			{/* 現在時刻 */}
			<div className={classes.nowClock}>
				<div>{moment(now).format('YYYY/MM/DD')}</div>
				<div>{moment(now).format('hh:mm:ss')}</div>
			</div>
		</div>
	);
};

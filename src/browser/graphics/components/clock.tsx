import '../styles/common.css';

import React from 'react';
import {makeStyles} from '@material-ui/core';
import moment from 'moment';
import useInterval from '@use-it/interval';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		color: 'white',
		fontFamily: 'PressStart2P',
		textAlign: 'center',
	},
});

type Props = {
	top: number;
	left: number;
	fontSize: number;
	color?: string;
	type?: 'multiline' | 'line';
};

export const Clock: React.SFC<Props> = (props: Props) => {
	const classes = useStyles({});

	// 現在時刻
	const [now, setNow] = React.useState<number>(new Date().getTime());
	useInterval(() => {
		setNow(new Date().getTime());
	}, 100);

	return (
		<div className={classes.root} style={{...props}}>
			{props.type === 'line' ? (
				<>
					<div>{moment(now).format('YYYY/MM/DD HH:mm:ss')}</div>
				</>
			) : (
				<>
					<div>{moment(now).format('YYYY/MM/DD')}</div>
					<div>{moment(now).format('HH:mm:ss')}</div>
				</>
			)}
		</div>
	);
};

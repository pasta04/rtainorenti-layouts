import '../styles/common.css';

import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Clock} from './clock';

const useStyles = makeStyles({
	root: {},
	logoArea: {
		position: 'absolute',
		top: 10,
		left: 5,
	},
	/** メインタイトル */
	title: {
		fontFamily: 'PressStart2P',
		color: 'yellow',
		fontSize: 64,
	},
	/** サブタイトル */
	subtitle: {
		fontFamily: 'PressStart2P',
		color: 'yellow',
		fontSize: 32,
	},
});

export const Header: React.SFC = () => {
	const classes = useStyles({});

	return (
		<div className={classes.root}>
			{/* ロゴ */}
			<div className={classes.logoArea}>
				<div className={classes.title}>
					{nodecg.bundleConfig.logo.title}
				</div>
				<div className={classes.subtitle}>
					{nodecg.bundleConfig.logo.subtitle}
				</div>
			</div>

			{/* 現在時刻 */}
			<Clock top={10} left={1400} fontSize={50} />
		</div>
	);
};

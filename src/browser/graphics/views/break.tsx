import '../styles/common.css';

import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {useReplicant} from '../../use-replicant';
import moment from 'moment';
import {makeStyles} from '@material-ui/core';

const currentRunRep = nodecg.Replicant('current-run');
const scheduleRep = nodecg.Replicant('schedule');
const {onsite} = nodecg.bundleConfig;
const {colorTheme} = nodecg.bundleConfig;

const useStyles = makeStyles(() => ({
	logo: {},
}));

/**
 * 残り秒数からN時間後の表記にする
 * @param duration 残り秒数
 */
const convertDurationToString = (duration: moment.Duration) => {
	const hours = Math.floor(duration.asHours());
	const minutes = duration.minutes();
	if (hours === 0) {
		return `${minutes}分後`;
	}
	return `${hours}時間${minutes}分後`;
};

const Break: React.FunctionComponent = () => {
	const classes = useStyles({});
	// 現在のゲーム
	const [currentRun] = useReplicant(nodecg.Replicant('current-run'));
	// スケジュール
	const [schedule] = useReplicant(nodecg.Replicant('schedule'));

	useEffect(() => {
		//
	}, [currentRun, schedule]);

	return (
		<div>
			{/* ロゴ */}
			<div className={classes.logo}>RTA in 俺んち</div>

			{/* 時計 */}
			<div></div>

			{/* NEXT情報 */}
			<div>
				<div>NEXT GAME</div>
				<div>あ</div>
			</div>
		</div>
	);
};

ReactDom.render(<Break />, document.getElementById('break'));

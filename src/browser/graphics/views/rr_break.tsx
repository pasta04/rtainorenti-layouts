import '../styles/common.css';

import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {useReplicant} from '../../use-replicant';
import {makeStyles} from '@material-ui/core';
import {Clock} from '../components/clock';
import useInterval from '@use-it/interval';
import logo from '../images/logo/logo-rr.png';
import BackgroundImage from '../images/background/background-rr.png';

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

const useStyles = makeStyles(() => ({
	root: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		color: 'black',
	},
	logo: {
		position: 'absolute',
		width: 370,
	},
	nextArea: {
		position: 'absolute',
		top: 430,
		left: 360,
		fontSize: 50,
	},
	label: {
		fontFamily: 'PressStart2P',
	},
	itemLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 35,
	},
	item: {
		fontFamily: 'PixelMplus10',
		fontSize: 32,
		marginLeft: '1em',
		wordBreak: 'break-all',
	},
	loadingArea: {
		position: 'absolute',
		top: 300,
		left: 120,
		fontSize: 81,
		fontFamily: 'PressStart2P',
	},
}));

const Break: React.FunctionComponent = () => {
	const classes = useStyles({});
	// 現在のゲーム
	const [currentRun] = useReplicant(nodecg.Replicant('current-run'));
	// スケジュール
	const [schedule] = useReplicant(nodecg.Replicant('schedule'));

	const [loadingDot, setLoadingDot] = useState<string>('');

	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		// 背景画像
		canvas.width = SCREEN_WIDTH;
		canvas.height = SCREEN_HEIGHT;
		const image = new Image();
		image.src = BackgroundImage;
		image.addEventListener('load', function() {
			// 背景画像
			canvas.width = SCREEN_WIDTH;
			canvas.height = SCREEN_HEIGHT;
			const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);
		});
	}, []);

	useInterval(() => {
		let newDot = loadingDot;
		if (newDot.length === 3) {
			newDot = '';
		} else {
			newDot = `${newDot}.`;
		}
		setLoadingDot(newDot);
	}, 500);

	useEffect(() => {
		//
	}, [currentRun, schedule]);

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
			</div>

			{/* 時計 */}
			<Clock
				top={680}
				left={700}
				fontSize={30}
				color={'yellow'}
				type={'line'}
			/>

			{/* 次の走者 */}
			<div className={classes.nextArea}>
				<div className={classes.label}>NEXT</div>
				<div style={{marginLeft: '3em'}}>
					<div className={classes.itemLabel}>GAME</div>
					<div className={classes.item}>{currentRun?.title}</div>
					<div className={classes.itemLabel}>CATEGORY</div>
					<div className={classes.item}>{currentRun?.category}</div>
				</div>
			</div>

			{/* なうろぉでぃんぐ */}
			<div className={classes.loadingArea}>NOW LOADING{loadingDot}</div>

			{/* 背景 */}
			<canvas
				ref={canvasRef}
				id='background'
				width={SCREEN_WIDTH}
				height={1080}
			/>
		</div>
	);
};

ReactDom.render(<Break />, document.getElementById('rr_break'));

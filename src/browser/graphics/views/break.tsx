import '../styles/common.css';

import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {useReplicant} from '../../use-replicant';
import {makeStyles} from '@material-ui/core';
import {Clock} from '../components/clock';
import useInterval from '@use-it/interval';

const useStyles = makeStyles(() => ({
	root: {
		width: 1920,
		height: 1080,
		color: 'white',
	},
	nextArea: {
		position: 'absolute',
		top: 200,
		left: 50,
		fontSize: 50,
	},
	label: {
		fontFamily: 'PressStart2P',
	},
	item: {
		fontFamily: 'PixelMplus10',
	},
	loadingArea: {
		position: 'absolute',
		top: '50%',
		left: '30%',
		fontSize: 60,
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
		canvas.width = 1920;
		canvas.height = 1080;
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, 1920, 1080);

		// 映像の領域を切り取り
		ctx.globalCompositeOperation = 'xor';

		const cameraW = 640;
		const cameraH = 360;

		// カメラ
		ctx.fillRect(
			1920 - cameraW - 10,
			1080 - cameraH - 10,
			cameraW,
			cameraH,
		);
	});

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
			{/* 時計 */}
			<Clock top={10} left={1400} fontSize={50} />

			{/* 次の走者 */}
			<div className={classes.nextArea}>
				<div className={classes.label}>NEXT GAME</div>
				<div className={classes.item}>{currentRun?.title}</div>
				<div className={classes.item}>
					@
					{currentRun?.runners
						?.map((runner) => runner.name)
						.join(' / @')}
				</div>
			</div>

			{/* なうろぉでぃんぐ */}
			<div className={classes.loadingArea}>Now Loading{loadingDot}</div>

			{/* 背景 */}
			<canvas
				ref={canvasRef}
				id='background'
				width={1920}
				height={1080}
			/>
		</div>
	);
};

ReactDom.render(<Break />, document.getElementById('break'));

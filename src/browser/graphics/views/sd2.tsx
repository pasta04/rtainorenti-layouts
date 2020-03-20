import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import backgroundImage from '../images/background/background.png';
import {Timer, CurrentRun} from '../../../nodecg/replicants';
import classnames from 'classnames';
import {calcWidthFitFontSize} from '../../util';
import {Header} from '../components/header';

const useStyles = makeStyles({
	root: {
		width: 1920,
		height: 1080,
	},
	timer: {
		fontSize: 64,
		fontFamily: 'PixelMplus10',
	},
	runInfoArea1p: {
		position: 'absolute',
		top: 800,
		left: 40,
		color: 'white',
		fontSize: 40,
		width: 680,
	},
	runInfoArea2p: {
		position: 'absolute',
		top: 800,
		left: 1230,
		color: 'white',
		fontSize: 40,
		width: 650,
		textAlign: 'right',
	},
	runItemRunners: {
		height: 90,
	},
	runItemGame: {
		height: 90,
	},
	runItemGategory: {
		width: 650,
	},
	runItemTime: {
		width: 650,
	},
	runItemEst: {
		display: 'flex',
		position: 'absolute',
		left: 330,
	},
	runInfoLabel: {
		fontFamily: 'PressStart2P',
	},
	runInfoValue1p: {
		paddingLeft: '1em',
		fontFamily: 'PixelMplus10',
	},
	runInfoValue2p: {
		paddingRight: '1em',
		fontFamily: 'PixelMplus10',
	},
	// タイマーリタイア色
	timerRetire: {
		color: 'silver',
	},
	// タイマー完走色
	timerComplete: {
		color: 'yellow',
	},
	/** 見えなくする */
	hidden: {
		visibility: 'hidden',
	},
});

const currentRunRep = nodecg.Replicant('current-run');
const timerRep = nodecg.Replicant('timer');

const App: React.SFC = () => {
	const classes = useStyles({});
	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	const [runners, setRunners] = React.useState<CurrentRun>(null);
	const [timer, setTimer] = React.useState<Timer>();

	const runnerHandler = (newVal: CurrentRun) =>
		setRunners(newVal && {...newVal});
	React.useEffect(() => {
		currentRunRep.on('change', runnerHandler);
		return () => {
			currentRunRep.removeListener('change', runnerHandler);
		};
	}, [currentRunRep]);

	const timerHandler = (newVal: Timer) => {
		setTimer({...newVal});
	};
	React.useEffect(() => {
		timerRep.on('change', timerHandler);
		return () => {
			timerRep.removeListener('change', timerHandler);
		};
	}, [timerRep]);

	// 背景画像
	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const image = new Image();
		image.src = backgroundImage;
		image.addEventListener('load', function() {
			// 背景画像
			canvas.width = 1920;
			canvas.height = 1080;
			const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);

			// 映像の領域を切り取り
			ctx.globalCompositeOperation = 'xor';

			const gameW = 900;
			const gameH = 675;

			const cameraW = 480;
			const cameraH = 270;

			// ゲーム1
			ctx.fillRect(40, 120, gameW, gameH);
			// ゲーム2
			ctx.fillRect(80 + gameW, 120, gameW, gameH);
			// カメラ
			ctx.fillRect(
				1920 / 2 - cameraW / 2,
				1080 - cameraH - 5,
				cameraW,
				cameraH,
			);
		});
	});

	const timerClassMain = classnames(classes.runInfoValue2p, classes.timer);

	const timerClass1p = classnames(classes.runInfoValue1p, classes.timer, {
		[classes.hidden]: timer?.results[0]?.timerState === 'Running',
		[classes.timerRetire]: timer?.results[0]?.forfeit === true,
		[classes.timerComplete]:
			timer?.results[0]?.timerState === 'Stopped' &&
			timer?.results[0].forfeit === false,
	});

	const timerClass2p = classnames(classes.runInfoValue2p, classes.timer, {
		[classes.hidden]: timer?.results[1]?.timerState === 'Running',
		[classes.timerRetire]: timer?.results[1]?.forfeit === true,
		[classes.timerComplete]:
			timer?.results[1]?.timerState === 'Stopped' &&
			timer?.results[1].forfeit === false,
	});

	return (
		<div className={classes.root}>
			<Header />

			{/* 走者情報 */}
			{/* 1P */}
			<div className={classes.runInfoArea1p}>
				<div className={classes.runItemRunners}>
					<div className={classes.runInfoLabel}>RUNNER　1</div>
					<div className={classes.runInfoValue1p}>
						{runners?.runners[0]?.name ?? ''}
					</div>
				</div>
				<div className={classes.runItemGame}>
					<div className={classes.runInfoLabel}>GAME</div>
					<div
						className={classes.runInfoValue1p}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.title ?? '',
								600,
								12,
								40,
								'px',
								'PixelMplus10',
							),
						}}
					>
						{runners?.title}
					</div>
				</div>
				<div className={classes.runItemGategory}>
					<div className={classes.runInfoLabel}>CATEGORY</div>
					<div className={classes.runInfoValue1p}>
						{runners?.category}
					</div>
				</div>
			</div>
			<div style={{display: 'flex'}}>
				{/* 1P結果 */}
				<div
					className={timerClass1p}
					style={{
						position: 'absolute',
						top: 790,
						right: 1220,
						fontSize: 50,
						textAlign: 'right',
					}}
				>
					{(timer?.results[0] as Timer)?.formatted}
				</div>

				{/* 2P結果 */}
				<div
					className={timerClass2p}
					style={{
						position: 'absolute',
						top: 790,
						left: 1220,
						fontSize: 50,
						textAlign: 'left',
					}}
				>
					{(timer?.results[1] as Timer)?.formatted}
				</div>
			</div>
			{/* 2P */}
			<div className={classes.runInfoArea2p}>
				<div className={classes.runItemRunners}>
					<div className={classes.runInfoLabel}>RUNNER　2</div>
					<div className={classes.runInfoValue2p}>
						{runners?.runners[1]?.name ?? ''}
					</div>
				</div>
				<div className={classes.runItemTime}>
					<div
						className={classes.runInfoLabel}
						style={{marginRight: 170}}
					>
						TIME
					</div>
					<div className={timerClassMain}>{timer?.formatted}</div>
				</div>
				<div className={classes.runItemEst}>
					<div className={classes.runInfoLabel}>EST　</div>
					<div
						className={classes.runInfoValue2p}
						style={{marginRight: -30}}
					>
						{runners?.runDuration}
					</div>
				</div>
			</div>

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

ReactDom.render(<App />, document.getElementById('sd2'));

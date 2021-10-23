import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import backgroundImage from '../images/background/background.png';
import {Timer, CurrentRun} from '../../../nodecg/replicants';
import classnames from 'classnames';
import {Header} from '../components/header';
import {calcWidthFitFontSize} from '../../util';

const useStyles = makeStyles({
	root: {
		width: 1920,
		height: 1080,
	},
	logoArea: {
		position: 'absolute',
		top: 10,
		left: 5,
	},
	timer: {
		position: 'absolute',
		bottom: 20,
		left: 120,
		fontSize: 100,
		fontFamily: 'PixelMplus10',
	},
	runInfoArea: {
		position: 'absolute',
		top: 140,
		left: 1460,
		color: 'white',
		fontSize: 40,
		width: 450,
	},
	runItemRunners: {
		height: 130,
	},
	runItemGame: {
		height: 180,
	},
	runItemGategory: {
		position: 'absolute',
		top: 350,
		width: 450,
	},
	runItemTime: {
		position: 'absolute',
		top: 500,
		width: 450,
	},
	runItemEst: {
		position: 'absolute',
		top: 620,
		width: 450,
		display: 'flex',
	},
	runInfoLabel: {
		fontFamily: 'PressStart2P',
	},
	runInfoValue: {
		textAlign: 'center',
		fontFamily: 'PixelMplus10',
	},
	/** 現在時刻 */
	nowClock: {
		position: 'absolute',
		top: 10,
		left: 1580,
		fontSize: 30,
		color: 'white',
		fontFamily: 'PressStart2P',
		textAlign: 'center',
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
	// タイマーリタイア色
	timerRetire: {
		color: 'silver',
	},
	// タイマー完走色
	timerComplete: {
		color: 'yellow',
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
			// ゲーム
			ctx.fillRect(100, 140, 1240, 930);
			// カメラ
			ctx.fillRect(1920 - 458, 1080 - 262, 448, 252);
		});
	});

	const timerClass = classnames(classes.runInfoValue, {
		[classes.timerRetire]: timer?.results[0]?.forfeit === true,
		[classes.timerComplete]:
			timer?.results[0]?.timerState === 'Stopped' &&
			timer?.results[0].forfeit === false,
	});
	return (
		<div className={classes.root}>
			<Header />

			{/* 走者情報 */}
			<div className={classes.runInfoArea}>
				<div className={classes.runItemRunners}>
					<div className={classes.runInfoLabel}>RUNNER</div>
					<div className={classes.runInfoValue}>
						{runners?.runners[0]?.name ?? ''}
					</div>
				</div>
				<div className={classes.runItemGame}>
					<div className={classes.runInfoLabel}>GAME</div>
					<div
						className={classes.runInfoValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.title ?? '',
								1200,
								22,
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
					<div className={classes.runInfoValue}>{runners?.category}</div>
				</div>
				<div className={classes.runItemTime}>
					<div className={classes.runInfoLabel}>TIME</div>
					<div className={timerClass}>{timer?.formatted}</div>
				</div>
				<div className={classes.runItemEst}>
					<div className={classes.runInfoLabel}>EST　</div>
					<div className={classes.runInfoValue}>{runners?.runDuration}</div>
				</div>
			</div>

			{/* 背景 */}
			<canvas ref={canvasRef} id='background' width={1920} height={1080} />
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('root'));

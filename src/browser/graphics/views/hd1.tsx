import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import backgroundImage from '../images/background/background.png';
import logoImage from '../images/logo/logo.png';
import {Timer, CurrentRun} from '../../../nodecg/replicants';
import moment from 'moment';

const useStyles = makeStyles({
	root: {
		width: 1920,
		height: 1080,
	},
	logo: {
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
		top: 115,
		left: 1460,
		color: 'white',
		fontSize: 40,
		width: 450,
	},
	runItem: {
		height: 130,
	},
	runInfoValue: {
		textAlign: 'center',
	},
	nowClock: {
		position: 'absolute',
		top: 10,
		left: 1580,
		fontSize: 30,
		color: 'white',
	},
});

const currentRunRep = nodecg.Replicant('current-run');
const timerRep = nodecg.Replicant('timer');

const App: React.SFC = () => {
	const classes = useStyles({});
	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	const [runners, setRunners] = React.useState<CurrentRun>(null);
	const [timer, setTimer] = React.useState<Timer>();

	const [now, setNow] = React.useState<Date>(new Date());
	React.useEffect(() => setNow(new Date()));

	const runnerHandler = (newVal: CurrentRun) =>
		setRunners(newVal && {...newVal});
	React.useEffect(() => {
		currentRunRep.on('change', runnerHandler);
		return () => {
			currentRunRep.removeListener('change', runnerHandler);
		};
	}, [currentRunRep]);

	const timerHandler = (newVal: Timer) => setTimer({...newVal});
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
			ctx.fillRect(10, 120, 1440, 810);
			// カメラ
			ctx.fillRect(1920 - 458, 1080 - 262, 448, 252);
		});
	});

	return (
		<div className={classes.root}>
			{/* ロゴ */}
			<div className={classes.logo}>
				<img src={logoImage} height={100} />
			</div>

			{/* 現在時刻 */}
			<div className={classes.nowClock}>
				{moment(new Date(now)).format('YYYY/MM/DD hh:mm:ss')}
			</div>

			{/* 走者情報 */}
			<div className={classes.runInfoArea}>
				<div className={classes.runItem}>
					<div>RUNNER</div>
					<div className={classes.runInfoValue}>
						{runners?.runners
							.map((runner) => runner.name)
							.join('/')}
					</div>
				</div>
				<div className={classes.runItem}>
					<div>GAME</div>
					<div className={classes.runInfoValue}>{runners?.title}</div>
				</div>
				<div className={classes.runItem}>
					<div>CATEGORY</div>
					<div className={classes.runInfoValue}>
						{runners?.category}
					</div>
				</div>
				<div className={classes.runItem}>
					<div>TIME</div>
					<div className={classes.runInfoValue}>
						{timer?.formatted} ... ({timer?.timerState})
					</div>
				</div>
				<div className={classes.runItem}>
					<div>EST</div>
					<div className={classes.runInfoValue}>
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

ReactDom.render(<App />, document.getElementById('hd1'));

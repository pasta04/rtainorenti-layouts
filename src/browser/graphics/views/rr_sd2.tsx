import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import logo from '../images/logo/logo-rr.png';
import BackgroundImage from '../images/background/background-rr.png';
import {CurrentRun} from '../../../nodecg/replicants';
import {calcWidthFitFontSize} from '../../util';
import {Clock} from '../components/clock';

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

const useStyles = makeStyles({
	root: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
	logo: {
		position: 'absolute',
		width: 270,
	},
	runInfoArea1p: {
		position: 'absolute',
		top: 560,
		left: 200,
		color: 'blue',
		fontSize: 30,
		width: 300,
	},
	runInfoArea2p: {
		position: 'absolute',
		top: 560,
		left: 790,
		color: 'blue',
		fontSize: 30,
		width: 300,
		textAlign: 'right',
	},
	runItemRunners: {
		height: 90,
	},
	runItemGame: {
		height: 65,
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
		fontSize: 25,
	},
	runInfoValue1p: {
		paddingLeft: '1em',
		fontFamily: 'PixelMplus10',
	},
	runInfoValue2p: {
		paddingRight: '1em',
		fontFamily: 'PixelMplus10',
	},
	gameValue: {
		paddingLeft: '3em',
		fontFamily: 'PixelMplus10',
	},
	commentaryArea: {
		position: 'absolute',
		top: 670,
		left: 10,
		color: 'green',
	},
	commentaryLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 18,
	},
	commentaries: {
		fontFamily: 'PixelMplus10',
		fontSize: 22,
		marginLeft: '1em',
	},
	/** 見えなくする */
	hidden: {
		visibility: 'hidden',
	},
});

const currentRunRep = nodecg.Replicant('current-run');

const App: React.SFC = () => {
	const classes = useStyles({});
	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	const [runners, setRunners] = React.useState<CurrentRun>(null);

	const runnerHandler = (newVal: CurrentRun) =>
		setRunners(newVal && {...newVal});
	React.useEffect(() => {
		currentRunRep.on('change', runnerHandler);
		return () => {
			currentRunRep.removeListener('change', runnerHandler);
		};
	}, [currentRunRep]);

	// 背景画像
	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const image = new Image();
		image.src = BackgroundImage;
		image.addEventListener('load', function() {
			// 背景画像
			canvas.width = SCREEN_WIDTH;
			canvas.height = SCREEN_HEIGHT;
			const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);

			// 映像の領域を切り取り
			ctx.globalCompositeOperation = 'xor';

			const gameW = 620;
			const gameH = 465;

			// ゲーム1
			ctx.fillRect(10, 90, gameW, gameH);
			// ゲーム2
			ctx.fillRect(10 * 2 + 10 + gameW, 90, gameW, gameH);

			const timerW = 200;
			const timerH = 40;
			// 走者1タイマー
			ctx.fillRect(10, 90 + gameH, timerW, timerH);
			// 走者2タイマー
			ctx.fillRect(
				SCREEN_WIDTH - timerW - 10,
				90 + gameH,
				timerW,
				timerH,
			);
		});
	});

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
				<Clock
					top={8}
					left={815}
					fontSize={24}
					type={'line'}
					color={'yellow'}
				/>
			</div>

			{/* 走者情報 */}
			{/* 1P */}
			<div className={classes.runInfoArea1p}>
				<div className={classes.runItemRunners}>
					<div className={classes.runInfoValue1p}>
						{runners?.runners[0]?.name ?? ''}
					</div>
				</div>
			</div>

			{/* 2P */}
			<div className={classes.runInfoArea2p}>
				<div className={classes.runItemRunners}>
					<div className={classes.runInfoValue2p}>
						{runners?.runners[1]?.name ?? ''}
					</div>
				</div>
			</div>

			{/* ゲーム、カテゴリ */}
			<div style={{position: 'absolute', left: 440, top: 595}}>
				<div className={classes.runItemGame}>
					<div className={classes.runInfoLabel}>GAME</div>
					<div
						className={classes.gameValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.title ?? '',
								600,
								12,
								22,
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
					<div
						className={classes.gameValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.category ?? '',
								600,
								12,
								22,
								'px',
								'PixelMplus10',
							),
						}}
					>
						{runners?.category}
					</div>
				</div>
			</div>

			{/* 解説 */}
			<div className={classes.commentaryArea}>
				<div className={classes.commentaryLabel}>COMMENTARY</div>
				<div className={classes.commentaries}>
					{runners?.commentators.map((commentator) => {
						return `${commentator.name}　`;
					})}
				</div>
			</div>

			{/* 背景 */}
			<canvas
				ref={canvasRef}
				id='background'
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
			/>
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('rr_sd2'));

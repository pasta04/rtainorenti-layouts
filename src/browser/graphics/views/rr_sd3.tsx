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
	/** ロゴの位置 */
	logo: {
		left: 1020,
		top: 645,
		width: 270,
		position: 'absolute',
	},
	/** 走者名1P */
	runInfoArea1p: {
		position: 'absolute',
		top: 75,
		left: 465,
		color: 'blue',
		fontSize: 35,
		width: 350,
		height: 90,
	},
	/** 走者名2P */
	runInfoArea2p: {
		position: 'absolute',
		top: 260,
		left: 485,
		color: 'blue',
		fontSize: 35,
		textAlign: 'right',
		width: 350,
		height: 90,
	},
	runInfoArea3p: {
		position: 'absolute',
		top: 420,
		left: 465,
		color: 'blue',
		fontSize: 35,
		textAlign: 'left',
		width: 350,
		height: 90,
	},
	/** ゲーム名エリア */
	gameArea: {
		height: 65,
	},
	/** カテゴリ名エリア */
	categoryArea: {
		// width: 650,
	},
	/** ラベル */
	runInfoLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 25,
	},
	/** 走者名ラベル1P */
	runInfoValue1p: {
		paddingLeft: 35,
		fontFamily: 'PixelMplus10',
	},
	/** 走者名ラベル2P */
	runInfoValue2p: {
		paddingRight: 35,
		fontFamily: 'PixelMplus10',
	},
	/** ゲーム名とカテゴリ名 */
	gameValue: {
		paddingLeft: 50,
		fontFamily: 'PixelMplus10',
	},
	/** 解説者エリア */
	commentatorArea: {
		position: 'absolute',
		top: 550,
		left: 940,
		color: 'green',
	},
	/** 解説者のラベル */
	commentatorLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 20,
	},
	/** 解説者名 */
	commentators: {
		fontFamily: 'PixelMplus10',
		fontSize: 25,
		marginLeft: '1em',
		wordBreak: 'keep-all',
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

			const gameW = 460;
			const gameH = 345;

			ctx.fillRect(10, 10, gameW, gameH);
			ctx.fillRect(20 + 330 + gameW, 10, gameW, gameH);
			ctx.fillRect(10, 20 + gameH, gameW, gameH);

			const timerW = 200;
			const timerH = 40;
			// 走者1タイマー
			ctx.fillRect(10 + gameW, 10, timerW, timerH);
			ctx.fillRect(
				SCREEN_WIDTH - (gameW + 10 + timerW),
				10 + gameH - timerH,
				timerW,
				timerH,
			);
			ctx.fillRect(10 + gameW, 20 + gameH, timerW, timerH);
		});
	});

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
				<Clock
					top={690}
					left={540}
					fontSize={18}
					type={'line'}
					color={'yellow'}
				/>
			</div>

			{/* 走者情報 */}
			{/* 1P */}
			<div className={classes.runInfoArea1p}>
				<div
					className={classes.runInfoValue1p}
					style={{
						fontSize: calcWidthFitFontSize(
							runners?.runners[0]?.name ?? '',
							320,
							12,
							35,
							'px',
							'PixelMplus10',
						),
					}}
				>
					{runners?.runners[0]?.name ?? ''}
				</div>
			</div>

			{/* 2P */}
			<div className={classes.runInfoArea2p}>
				<div
					className={classes.runInfoValue2p}
					style={{
						fontSize: calcWidthFitFontSize(
							runners?.runners[1]?.name ?? '',
							320,
							12,
							35,
							'px',
							'PixelMplus10',
						),
					}}
				>
					{runners?.runners[1]?.name ?? ''}
				</div>
			</div>

			{/* 3P */}
			<div className={classes.runInfoArea3p}>
				<div
					className={classes.runInfoValue1p}
					style={{
						fontSize: calcWidthFitFontSize(
							runners?.runners[2]?.name ?? '',
							320,
							12,
							35,
							'px',
							'PixelMplus10',
						),
					}}
				>
					{runners?.runners[2]?.name ?? ''}
				</div>
			</div>

			{/* ゲーム、カテゴリ */}
			<div style={{position: 'absolute', left: 538, top: 550}}>
				<div className={classes.gameArea}>
					<div className={classes.runInfoLabel}>GAME</div>
					<div
						className={classes.gameValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.title ?? '',
								350,
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
				<div className={classes.categoryArea}>
					<div className={classes.runInfoLabel}>CATEGORY</div>
					<div
						className={classes.gameValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.category ?? '',
								350,
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
			<div className={classes.commentatorArea}>
				<div className={classes.commentatorLabel}>COMMENTATOR</div>
				<div className={classes.commentators}>
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

ReactDom.render(<App />, document.getElementById('rr_sd3'));

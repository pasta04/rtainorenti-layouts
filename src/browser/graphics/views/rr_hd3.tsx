import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import logo from '../images/logo/R2_1.png';
import BackgroundImage from '../images/background/background-rr.png';
import {CurrentRun, TournamentCurrent} from '../../../nodecg/replicants';
import {calcWidthFitFontSize} from '../../util';
import {Clock} from '../components/clock';
import star from '../images/icon/star.png';

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;
const RUNNER_FONT_MIN = 14;
const RUNNER_FONT_MAX = 32;

const useStyles = makeStyles({
	root: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
	/** ロゴの位置 */
	logo: {
		top: 510,
		right: 10,
		width: 300,
		position: 'absolute',
	},
	/** 走者名1P */
	runInfoArea1p: {
		position: 'absolute',
		top: 55,
		left: 535,
		color: 'blue',
		fontSize: 35,
		width: 200,
		height: 90,
	},
	/** 走者名2P */
	runInfoArea2p: {
		position: 'absolute',
		top: 220,
		left: 545,
		color: 'blue',
		fontSize: 35,
		textAlign: 'right',
		width: 200,
		height: 90,
	},
	runInfoArea3p: {
		position: 'absolute',
		top: 360,
		left: 535,
		color: 'blue',
		fontSize: 35,
		textAlign: 'left',
		width: 200,
		height: 90,
	},
	/** ゲーム名エリア */
	gameArea: {
		height: 65,
		maxWidth: 800,
	},
	/** カテゴリ名エリア */
	categoryArea: {
		// width: 650,
	},
	/** ラベル */
	runInfoLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 22,
	},
	/** 走者名ラベル1P */
	runInfoValue1p: {
		fontFamily: 'PixelMplus10',
	},
	/** 走者名ラベル2P */
	runInfoValue2p: {
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
		top: 620,
		left: 570,
		color: 'green',
		width: 470,
	},
	/** 解説者のラベル */
	commentatorLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 22,
	},
	/** 解説者名 */
	commentators: {
		fontFamily: 'PixelMplus10',
		fontSize: 22,
		marginLeft: 46,
		wordBreak: 'keep-all',
	},
	/** 見えなくする */
	hidden: {
		visibility: 'hidden',
	},
	round1p: {
		position: 'absolute',
		top: 95,
		left: 510,
		width: 200,
		textAlign: 'center',
	},
	round2p: {
		position: 'absolute',
		top: 185,
		left: 570,
		width: 200,
		textAlign: 'center',
	},
	round3p: {
		position: 'absolute',
		top: 400,
		left: 510,
		width: 200,
		textAlign: 'center',
	},
	roundTitle: {
		position: 'absolute',
		top: 560,
		left: 340,
		width: 600,
		textAlign: 'center',
		fontSize: 26,
		fontFamily: 'PixelMplus10',
	},
	starEffect: {
		animation: '$round-get 1 0.5s linear',
	},
	'@keyframes round-get': {
		'0%': {
			transform: 'scale(3,3)',
		},
		'100%': {
			transform: 'scale(1,1)',
		},
	},
});

const currentRunRep = nodecg.Replicant('current-run');
const tournamentRep = nodecg.Replicant('tournamentCurrent');

const App: React.SFC = () => {
	const classes = useStyles({});
	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	const [runners, setRunners] = React.useState<CurrentRun>(null);

	const runnerHandler = (newVal: CurrentRun) => {
		setRunners(newVal && {...newVal});
	};

	React.useEffect(() => {
		currentRunRep.on('change', runnerHandler);
		return () => {
			currentRunRep.removeListener('change', runnerHandler);
		};
	}, [currentRunRep]);

	const [tournament, setTournament] = React.useState<TournamentCurrent>({
		title: '',
		runner1: {
			round: 0,
		},
		runner2: {
			round: 0,
		},
		runner3: {
			round: 0,
		},
		runner4: {
			round: 0,
		},
	});
	const tournamentHandler = (newVal: TournamentCurrent) => {
		setTournament(newVal && {...newVal});
	};
	React.useEffect(() => {
		tournamentRep.on('change', tournamentHandler);
		return () => {
			tournamentRep.removeListener('change', tournamentHandler);
		};
	}, [tournamentRep]);

	const numToStar = (round: number) => {
		let dom = [];

		for (let i = 0; i < round; i++) {
			dom.push(
				<img key={i} src={star} width={30} className={classes.starEffect} />,
			);
		}

		return <>{dom.map((a) => a)}</>;
	};

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

			const gameW = 520;
			const gameH = 293;
			const timerW = 200;
			const timerH = 40;

			ctx.fillRect(10, 10, gameW, gameH);
			ctx.fillRect(750, 10, gameW, gameH);
			ctx.fillRect(10, 20 + gameH, gameW, gameH);

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

	const commentators =
		runners?.commentators
			.map((commentator) => {
				return `${commentator.name}`;
			})
			.join('　') ?? '';

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
				<Clock
					top={690}
					left={10}
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
							200,
							RUNNER_FONT_MIN,
							RUNNER_FONT_MAX,
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
							200,
							RUNNER_FONT_MIN,
							RUNNER_FONT_MAX,
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
							200,
							RUNNER_FONT_MIN,
							RUNNER_FONT_MAX,
							'px',
							'PixelMplus10',
						),
					}}
				>
					{runners?.runners[2]?.name ?? ''}
				</div>
			</div>

			{/* ラウンド */}
			{/* 1P ラウンド */}
			<div className={classes.round1p}>
				{numToStar(tournament.runner1.round)}
			</div>

			{/* 2P ラウンド */}
			<div className={classes.round2p}>
				{numToStar(tournament.runner2.round)}
			</div>

			{/* 3P ラウンド */}
			<div className={classes.round3p}>
				{numToStar(tournament.runner3.round)}
			</div>

			{/* ゲーム、カテゴリ */}
			<div style={{position: 'absolute', left: 570, top: 460}}>
				<div className={classes.gameArea}>
					<div className={classes.runInfoLabel}>GAME</div>
					<div
						className={classes.gameValue}
						style={{
							fontSize: calcWidthFitFontSize(
								runners?.title ?? '',
								700,
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
								700,
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
				<div
					className={classes.commentators}
					style={{
						fontSize: calcWidthFitFontSize(
							commentators ?? '',
							400,
							14,
							22,
							'px',
							'PixelMplus10',
						),
					}}
				>
					{commentators}
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

ReactDom.render(<App />, document.getElementById('rr_hd3'));

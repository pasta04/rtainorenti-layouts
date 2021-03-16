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

const useStyles = makeStyles({
	root: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
	/** ロゴの位置 */
	logo: {
		position: 'absolute',
		width: 325,
		top: -90,
	},
	/** 走者名1P */
	runInfoArea1p: {
		position: 'absolute',
		top: 165,
		left: 200,
		color: 'blue',
		fontSize: 30,
		width: 430,
		height: 90,
	},
	/** 走者名2P */
	runInfoArea2p: {
		position: 'absolute',
		top: 165,
		left: 660,
		color: 'blue',
		fontSize: 30,
		width: 430,
		textAlign: 'right',
		height: 90,
	},
	/** ゲーム名エリア */
	gameArea: {
		height: 65,
	},
	/** カテゴリ名エリア */
	categoryArea: {
		width: 650,
	},
	/** ラベル */
	runInfoLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 25,
	},
	/** 走者名ラベル1P */
	runInfoValue1p: {
		paddingLeft: '1em',
		fontFamily: 'PixelMplus10',
	},
	/** 走者名ラベル2P */
	runInfoValue2p: {
		paddingRight: '1em',
		fontFamily: 'PixelMplus10',
	},
	/** ゲーム名とカテゴリ名 */
	gameValue: {
		paddingLeft: '3em',
		fontFamily: 'PixelMplus10',
	},
	/** 解説者エリア */
	commentatorArea: {
		position: 'absolute',
		top: 670,
		left: 10,
		color: 'green',
		width: 400,
	},
	/** 解説者のラベル */
	commentatorLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 18,
	},
	/** 解説者名 */
	commentators: {
		fontFamily: 'PixelMplus10',
		fontSize: 22,
		marginLeft: '1em',
		wordBreak: 'keep-all',
	},
	/** 見えなくする */
	hidden: {
		visibility: 'hidden',
	},
	round1p: {
		position: 'absolute',
		top: 125,
		left: 10,
		width: 200,
		textAlign: 'center',
	},
	round2p: {
		position: 'absolute',
		top: 125,
		left: 1070,
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

	const runnerHandler = (newVal: CurrentRun) =>
		setRunners(newVal && {...newVal});
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
			const gameH = 349;
			const timerW = 200;
			const timerH = 40;

			// ゲーム1
			ctx.fillRect(10, 205, gameW, gameH);
			// ゲーム2
			ctx.fillRect(650, 205, gameW, gameH);

			// 走者1タイマー
			ctx.fillRect(10, 165, timerW, timerH);
			// 走者2タイマー
			ctx.fillRect(1070, 165, timerW, timerH);
		});
	});

	const numToStar = (round: number) => {
		let dom = [];

		for (let i = 0; i < round; i++) {
			dom.push(
				<img key={i} src={star} width={30} className={classes.starEffect} />,
			);
		}

		return <>{dom.map((a) => a)}</>;
	};

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
				<div className={classes.runInfoValue1p}>
					{runners?.runners[0]?.name ?? ''}
				</div>
			</div>

			{/* 2P */}
			<div className={classes.runInfoArea2p}>
				<div className={classes.runInfoValue2p}>
					{runners?.runners[1]?.name ?? ''}
				</div>
			</div>

			{/* ラウンド表示 */}
			<div className={classes.roundTitle}>{tournament.title}</div>

			{/* ゲーム、カテゴリ */}
			<div style={{position: 'absolute', left: 440, top: 570}}>
				<div className={classes.gameArea}>
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
				<div className={classes.categoryArea}>
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

			{/* 1P ラウンド */}
			<div className={classes.round1p}>
				{numToStar(tournament.runner1.round)}
			</div>

			{/* 2P ラウンド */}
			<div className={classes.round2p}>
				{numToStar(tournament.runner2.round)}
			</div>

			{/* 解説 */}
			<div className={classes.commentatorArea}>
				<div className={classes.commentatorLabel}>COMMENTATOR</div>
				<div
					className={classes.commentators}
					style={{
						fontSize: calcWidthFitFontSize(
							commentators ?? '',
							420,
							12,
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

ReactDom.render(<App />, document.getElementById('rr_hd2'));

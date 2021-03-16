import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import backgroundImage from '../images/background/background_naitou.png';
import {CurrentRun, TournamentCurrent} from '../../../nodecg/replicants';
import {Clock} from '../components/clock';
import classnames from 'classnames';
import {calcWidthFitFontSize} from '../../util';

const layoutwidth = 1280;
const layoutheight = 720;

const useStyles = makeStyles({
	root: {
		width: layoutwidth,
		height: layoutheight,
		fontFamily: 'KouzanGyousho',
	},
	runInfoArea: {
		position: 'absolute',
		top: 555,
		color: 'black',
		fontSize: 44,
		width: 200,
		textAlign: 'center',
		height: 50,
		overflowWrap: 'break-word',
	},
	playername: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	runInfoArea1p: {
		left: 20,
		display: 'flex',
	},
	runInfoArea2p: {
		left: 1060,
		display: 'flex',
	},
	roundInfo1p: {
		left: 221,
		color: 'white',
	},
	roundInfo2p: {
		left: 860,
		color: 'white',
	},
	matchTitleArea: {
		position: 'absolute',
		top: 670,
		left: 0,
		width: layoutwidth,
		display: 'flex',
		justifyContent: 'center',
	},
	matchTitle: {
		color: 'yellow',
		backgroundColor: '#994e00',
		fontSize: 44,
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
		image.src = backgroundImage;
		image.addEventListener('load', function() {
			// 背景画像
			canvas.width = layoutwidth;
			canvas.height = layoutheight;
			const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);

			// 映像の領域を切り取り
			ctx.globalCompositeOperation = 'xor';

			const gameW = 600;
			const gameH = 450;

			// ゲーム1
			ctx.fillRect(20, 107, gameW, gameH);
			// ゲーム2
			ctx.fillRect(20 + 40 + gameW + 1, 107, gameW, gameH);
		});
	});

	const numToStar = (round: number) => {
		let str = '';
		for (let i = 0; i < round; i++) {
			str += '☆';
		}
		return str;
	};

	return (
		<div className={classes.root}>
			{/* 走者情報 */}
			{/* 1P */}
			<div
				className={classnames(classes.runInfoArea, classes.runInfoArea1p)}
				style={{
					fontSize: calcWidthFitFontSize(
						runners?.runners[0]?.name ?? '',
						190,
						14,
						44,
						'px',
						'KouzanGyousho',
					),
				}}
			>
				<div className={classes.playername}>
					{runners?.runners[0]?.name ?? ''}
				</div>
			</div>

			{/* 2P */}
			<div
				className={classnames(classes.runInfoArea, classes.runInfoArea2p)}
				style={{
					fontSize: calcWidthFitFontSize(
						runners?.runners[1]?.name ?? '',
						200,
						14,
						44,
						'px',
						'KouzanGyousho',
					),
				}}
			>
				<div className={classes.playername}>
					{runners?.runners[1]?.name ?? ''}
				</div>
			</div>

			{/* 1P ラウンド */}
			<div
				className={classnames(classes.runInfoArea, classes.roundInfo1p)}
				style={{
					fontSize: calcWidthFitFontSize(
						numToStar(tournament.runner1.round),
						200,
						14,
						44,
						'px',
						'KouzanGyousho',
					),
				}}
			>
				{numToStar(tournament.runner1.round)}
			</div>

			{/* 2P ラウンド */}
			<div className={classnames(classes.runInfoArea, classes.roundInfo2p)}>
				{numToStar(tournament.runner2.round)}
			</div>

			{/* 何回戦の情報 */}
			<div className={classes.matchTitleArea}>
				<div className={classes.matchTitle}>{tournament?.title ?? ''}</div>
			</div>

			<Clock fontSize={24} top={665} left={20} />

			{/* 背景 */}
			<canvas
				ref={canvasRef}
				id='background'
				width={layoutwidth}
				height={layoutheight}
			/>
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('naitou'));

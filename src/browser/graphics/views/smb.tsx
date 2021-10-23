import '../styles/common.css';

import React from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import logo from '../images/logo/logo-rr.png';
import backgroundImage from '../images/background/background_smb.png';
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
		fontFamily: 'PixelMplus12',
	},
	/** ロゴの位置 */
	logo: {
		position: 'absolute',
		width: 140,
		top: 585,
		left: 1105,
	},
	runInfoArea: {
		position: 'absolute',
		top: 42,
		color: 'black',
		fontSize: 44,
		width: 280,
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
		left: 15,
		display: 'flex',
	},
	runInfoArea2p: {
		left: 980,
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
		top: 656,
		left: 0,
		width: layoutwidth,
		display: 'flex',
		justifyContent: 'center',
	},
	matchTitle: {
		color: 'yellow',
		backgroundColor: '#994e00',
		fontSize: 40,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	/** 解説者エリア */
	commentatorArea: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		color: 'yellow',
		backgroundColor: 'black',
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 5,
		paddingTop: 5,
		display: 'flex',
	},
	/** 解説者のラベル */
	commentatorLabel: {
		fontFamily: 'PixelMplus12',
		fontSize: 22,
		marginRight: 10,
	},
	/** 解説者名 */
	commentators: {
		fontFamily: 'PixelMplus12',
		fontSize: 22,
		marginLeft: '1em',
		wordBreak: 'keep-all',
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

			const gameW = 618;
			const gameH = 466;

			// ゲーム1
			ctx.fillRect(11, 97, gameW, gameH);
			// ゲーム2
			ctx.fillRect(11 + 21 + gameW + 1, 97, gameW, gameH);
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
			{/* 走者情報 */}
			{/* 1P */}
			<div
				className={classnames(classes.runInfoArea, classes.runInfoArea1p)}
				style={{
					fontSize: calcWidthFitFontSize(
						runners?.runners[0]?.name ?? '',
						280,
						14,
						30,
						'px',
						'PixelMplus12',
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
						280,
						14,
						30,
						'px',
						'PixelMplus12',
					),
				}}
			>
				<div className={classes.playername}>
					{runners?.runners[1]?.name ?? ''}
				</div>
			</div>

			{/* 何回戦の情報 */}
			<div className={classes.matchTitleArea}>
				<div className={classes.matchTitle}>{tournament?.title ?? ''}</div>
			</div>

			{/* 解説 */}
			<div className={classes.commentatorArea}>
				<div className={classes.commentatorLabel}>Commentary</div>
				<div
					className={classes.commentators}
					style={{
						fontSize: calcWidthFitFontSize(
							commentators ?? '',
							400,
							12,
							22,
							'px',
							'PixelMplus12',
						),
					}}
				>
					{commentators}
				</div>
			</div>

			<Clock
				fontSize={22}
				top={655}
				left={10}
				color={'yellow'}
				backgroundColor={'#994e00'}
				padding={5}
				borderRadius={5}
			/>

			<img className={classes.logo} src={logo} />

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

ReactDom.render(<App />, document.getElementById('root'));

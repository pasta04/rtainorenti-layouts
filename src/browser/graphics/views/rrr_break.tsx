import '../styles/common.css';

import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {useReplicant} from '../../use-replicant';
import {makeStyles} from '@material-ui/core';
import {Clock} from '../components/clock';
import useInterval from '@use-it/interval';
import logo from '../images/logo/R3_3.png';
import BackgroundImage from '../images/background/background-rr.png';
import {Schedule} from '../../../nodecg/replicants';

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

const useStyles = makeStyles(() => ({
	root: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		color: 'black',
	},
	logo: {
		position: 'absolute',
		width: 650,
		top: 25,
		left: 20,
	},
	nextArea: {
		position: 'absolute',
		top: 375,
		left: 630,
		fontSize: 30,
	},
	label: {
		fontFamily: 'PressStart2P',
	},
	itemLabel: {
		fontFamily: 'PressStart2P',
		fontSize: 35,
	},
	item: {
		fontFamily: 'PixelMplus10',
		fontSize: 32,
		marginLeft: '1em',
		wordBreak: 'break-all',
	},
	/** NOW LOADINGエリア */
	loadingArea: {
		position: 'absolute',
		top: 300,
		left: 600,
		fontSize: 45,
		fontFamily: 'PressStart2P',
	},
	/** 今後の予定エリア */
	scheduleArea: {
		position: 'absolute',
		top: 200,
		left: 50,
		fontSize: 24,
		fontFamily: 'PixelMplus10',
	},
	/** 今後の予定文字 */
	scheduleAreaLabel: {
		// marginBottom: 40,
		fontWeight: 'bold',
		fontSize: 30,
	},
	scheduleAreaGames: {
		position: 'relative',
	},
	scheduleAreaGamesItem: {
		marginTop: 40,
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
		canvas.width = SCREEN_WIDTH;
		canvas.height = SCREEN_HEIGHT;
		const image = new Image();
		image.src = BackgroundImage;
		image.addEventListener('load', function() {
			// 背景画像
			canvas.width = SCREEN_WIDTH;
			canvas.height = SCREEN_HEIGHT;
			const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);
		});
	}, []);

	// now loadingの...を表示
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

	function limitArray<T>(array: T[], limit: number): T[] {
		const list: T[] = [];
		for (let i = 0; i < limit; i++) {
			const item = array[i];
			if (item) list.push(item);
		}
		return list;
	}

	const createScheduleItem = (schedule: Schedule[0]) => {
		const date = new Date(schedule.date).getTime();
		const now = new Date().getTime();
		const difftime = date - now;
		const hours = Math.floor(difftime / (1000 * 60 * 60));
		const minutes = Math.floor((difftime % (1000 * 60 * 60)) / (1000 * 60));
		const minutesStr = `00${minutes}`.slice(-2);
		// console.log(
		// 	`date=${date} now=${now} difftime=${difftime} hours=${hours} minutes=${minutes}`,
		// );

		const runners = schedule.runners.map((runner) => runner.name).join(', ');
		const remains = `${hours}時間${minutesStr}分`;

		return (
			<div className={classes.scheduleAreaGamesItem}>
				<div>{schedule.title}</div>
				<div>Runner：{runners}</div>
				<div style={{display: 'flex'}}>
					<div>開始予定まで あと</div>
					<div style={{width: 150, textAlign: 'right'}}>{remains}</div>
				</div>
			</div>
		);
	};

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
			</div>

			{/* 時計 */}
			<Clock
				top={680}
				left={700}
				fontSize={30}
				color={'yellow'}
				type={'line'}
			/>

			{/* 今後の予定 */}
			<div className={classes.scheduleArea}>
				<div className={classes.scheduleAreaLabel}>今後の予定</div>
				<div className={classes.scheduleAreaGames}>
					{schedule &&
						limitArray(
							schedule.filter(
								(item) => item.index >= (currentRun ? currentRun.index : -1), // NEXTを含めないならここの条件からイコール抜く
							),
							3,
						).map(createScheduleItem)}
				</div>
			</div>

			{/* 次の走者 */}
			<div className={classes.nextArea}>
				<div className={classes.label}>NEXT</div>
				<div style={{marginLeft: '1em'}}>
					<div className={classes.itemLabel}>GAME</div>
					<div className={classes.item}>{currentRun?.title}</div>
					<div className={classes.itemLabel}>CATEGORY</div>
					<div className={classes.item}>{currentRun?.category}</div>
				</div>
			</div>

			{/* なうろぉでぃんぐ */}
			<div className={classes.loadingArea}>NOW LOADING{loadingDot}</div>

			{/* 背景 */}
			<canvas
				ref={canvasRef}
				id='background'
				width={SCREEN_WIDTH}
				height={1080}
			/>
		</div>
	);
};

ReactDom.render(<Break />, document.getElementById('root'));

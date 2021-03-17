import '../styles/common.css';

import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {makeStyles} from '@material-ui/core';
import useInterval from '@use-it/interval';
import logo from '../images/logo/R2_1.png';
import BackgroundImage from '../images/background/background-rr.png';

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
		width: 340,
		top: -100,
	},
	loadingArea: {
		position: 'absolute',
		top: 330,
		left: 360,
		fontSize: 81,
		fontFamily: 'PressStart2P',
	},
}));

const Break: React.FunctionComponent = () => {
	const classes = useStyles({});

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

	useInterval(() => {
		let newDot = loadingDot;
		if (newDot.length === 3) {
			newDot = '';
		} else {
			newDot = `${newDot}.`;
		}
		setLoadingDot(newDot);
	}, 500);

	return (
		<div className={classes.root}>
			<div>
				<img className={classes.logo} src={logo} />
			</div>

			{/* ざ、えんどってね */}
			<div className={classes.loadingArea}>THE END</div>

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

ReactDom.render(<Break />, document.getElementById('rr_end'));

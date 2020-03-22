import React, {ChangeEvent, useRef} from 'react';
import ReactDOM from 'react-dom';
import {TournamentCurrent, Challonge} from '../../../nodecg/replicants';
import {
	Button,
	TextField,
	Divider,
	Typography,
	Paper,
	Select,
	MenuItem,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
	importText: {
		width: 600,
	},
	paper: {
		padding: 10,
		margin: 5,
	},
	button: {
		margin: 5,
	},
	miniButton: {
		padding: 0,
		minWidth: 'initial',
		width: 30,
		margin: 5,
	},
	roundInfo: {
		margin: 10,
	},
});

const tournamentRep = nodecg.Replicant('tournament');
const challongeRep = nodecg.Replicant('challonge');
const currentRunRep = nodecg.Replicant('current-run');

const App: React.SFC = () => {
	const classes = useStyles({});
	const [tournament, setTournament] = React.useState<TournamentCurrent>({
		title: '',
		runner1: {
			round: 0,
		},
		runner2: {
			round: 0,
		},
	});
	const [matchTitle, setMatchTitle] = React.useState<string>('');

	const [challonge, setChallonge] = React.useState<Challonge>({
		tournamentName: '',
		data: [],
	});

	const [playerSelect, setPlayerSelect] = React.useState<number>(0);

	const challongeIdRef = useRef<HTMLTextAreaElement>(null);
	const playerRef = useRef<HTMLSelectElement>(null);

	/** トーナメントレプリカント */
	const thandler = (newVal: TournamentCurrent) => {
		setTournament({...newVal});
		setMatchTitle(newVal.title);
	};
	React.useEffect(() => {
		tournamentRep.on('change', thandler);
		return () => {
			tournamentRep.removeListener('change', thandler);
		};
	}, [tournamentRep]);

	/** Challongeレプリカント */
	const chandler = (newVal: Challonge) => {
		setChallonge({...newVal});
	};
	React.useEffect(() => {
		challongeRep.on('change', chandler);
		return () => {
			challongeRep.removeListener('change', chandler);
		};
	}, [challongeRep]);

	/** タイトル更新反映ボタン */
	const editMatchname = () => {
		nodecg.sendMessage('editMatchname', matchTitle);
	};
	const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
		setMatchTitle(e.target.value);
	};

	const handlePlayerSelect = (
		e: React.ChangeEvent<{
			name?: string | undefined;
			value: unknown;
		}>,
	) => {
		setPlayerSelect(Number(e.target.value));
	};

	const fetchTournament = () => {
		const id = challongeIdRef?.current?.value;
		if (id) nodecg.sendMessage('fetchTournament', id);
	};

	const changePlayer = () => {
		const index = playerSelect - 1;
		if (0 > index) return;
		const p1name = challonge.data[index].match.player1_name;
		const p2name = challonge.data[index].match.player2_name;

		if (!currentRunRep.value || !p1name || !p2name) return;
		currentRunRep.value.runners[0] = {
			name: p1name,
			twitch: undefined,
			twitter: undefined,
			nico: undefined,
		};

		currentRunRep.value.runners[1] = {
			name: p2name,
			twitch: undefined,
			twitter: undefined,
			nico: undefined,
		};
	};

	const handle1PMinus = () => {
		if (tournament.runner1.round <= 0) return;

		nodecg.sendMessage('editMatchRound', {
			index: 0,
			round: tournament.runner1.round - 1,
		});
	};
	const handle1PPlus = () => {
		nodecg.sendMessage('editMatchRound', {
			index: 0,
			round: tournament.runner1.round + 1,
		});
	};
	const handle2PMinus = () => {
		if (tournament.runner2.round <= 0) return;

		nodecg.sendMessage('editMatchRound', {
			index: 1,
			round: tournament.runner2.round - 1,
		});
	};
	const handle2PPlus = () => {
		nodecg.sendMessage('editMatchRound', {
			index: 1,
			round: tournament.runner2.round + 1,
		});
	};

	return (
		<div>
			{/* データの取得 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>データ取り込み</Typography>
				<TextField
					className={classes.importText}
					inputRef={challongeIdRef}
					variant={'outlined'}
					placeholder={
						'ChallongeトーナメントのID部分(https://challonge.com/ja/xxxxxxxxの末尾)'
					}
				/>
				<Button
					className={classes.button}
					onClick={fetchTournament}
					variant={'contained'}
					color={'secondary'}
				>
					情報取得
				</Button>
			</Paper>

			<Divider />

			{/* タイトル入力 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>N回戦の文字列</Typography>
				<div>
					<TextField
						value={matchTitle}
						onChange={handleTextInput}
						variant={'outlined'}
						placeholder={'例：第1回戦'}
					/>
					<Button
						className={classes.button}
						onClick={editMatchname}
						variant={'contained'}
						color={'primary'}
					>
						反映
					</Button>
				</div>
			</Paper>

			{/* 対戦者情報選択 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>対戦者情報選択</Typography>
				<div>
					<Select
						style={{minWidth: 300, maxWidth: 700}}
						inputRef={playerRef}
						value={playerSelect}
						onChange={handlePlayerSelect}
					>
						<MenuItem key={'-'} value={0}>
							-
						</MenuItem>

						{challonge.data.map((data, index) => {
							const text = `${data.match.round}回戦 ${data.match
								.player1_name ?? '★未定★'} vs ${data.match
								.player2_name ?? '★未定★'}`;
							return (
								<MenuItem
									key={`${text}_${index}`}
									value={index + 1}
								>
									{text}
								</MenuItem>
							);
						})}
					</Select>
					<Button
						className={classes.button}
						onClick={changePlayer}
						variant={'contained'}
						color={'primary'}
					>
						反映
					</Button>
				</div>
			</Paper>

			{/* ラウンド数の設定 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>ラウンド数制御</Typography>
				<div style={{display: 'flex'}}>
					{/* 1P */}
					<div className={classes.roundInfo}>
						1P
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle1PMinus}
						>
							<MinusIcon />
						</Button>
						<span>{tournament.runner1.round}</span>
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle1PPlus}
						>
							<PlusIcon />
						</Button>
					</div>

					{/* 2P */}
					<div className={classes.roundInfo}>
						2P
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle2PMinus}
						>
							<MinusIcon />
						</Button>
						<span>{tournament.runner2.round}</span>
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle2PPlus}
						>
							<PlusIcon />
						</Button>
					</div>
				</div>
			</Paper>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('tournament'));

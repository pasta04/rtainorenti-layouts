import React, {ChangeEvent, useRef} from 'react';
import ReactDOM from 'react-dom';
import {
	TournamentCurrent,
	Challonge,
	Spreadsheet,
} from '../../../nodecg/replicants';
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
	select: {
		minWidth: 300,
		maxWidth: 700,
	},
	divider: {
		marginBottom: 30,
	},
});

const tournamentRep = nodecg.Replicant('tournamentCurrent');
const spreadsheetRep = nodecg.Replicant('spreadsheet');
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
		runner3: {
			round: 0,
		},
		runner4: {
			round: 0,
		},
	});
	const [matchTitle, setMatchTitle] = React.useState<string>('');
	const [matchTitleList, setMatchTitleList] = React.useState<
		Spreadsheet['tournamentMatchTitle']
	>([]);

	const [challonge, setChallonge] = React.useState<Challonge>({
		tournamentId: '',
		tournamentName: '',
		data: [],
	});

	const [playerSelect, setPlayerSelect] = React.useState<number>(0);
	const [matchTitleSelect, setMatchTitleSelect] = React.useState<number>(0);

	const challongeIdRef = useRef<HTMLTextAreaElement>(null);

	/** トーナメントレプリカント */
	const shandler = (newVal: Spreadsheet) => {
		setMatchTitleList([...newVal.tournamentMatchTitle]);
	};
	React.useEffect(() => {
		spreadsheetRep.on('change', shandler);
		return () => {
			spreadsheetRep.removeListener('change', shandler);
		};
	}, [spreadsheetRep]);

	/** トーナメントレプリカント */
	const thandler = (newVal: TournamentCurrent) => {
		setTournament({...newVal});
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
		const selected =
			matchTitleSelect > 0
				? matchTitleList[matchTitleSelect - 1]?.matchTitle ?? ''
				: '';
		const msg = matchTitle ? matchTitle : selected;
		nodecg.sendMessage('editMatchname', msg);
	};
	const resetMatchname = () => {
		nodecg.sendMessage('editMatchname', '');
		setMatchTitleSelect(0);
		setMatchTitle('');
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

	const handleMatchTitleSelect = (
		e: React.ChangeEvent<{
			name?: string | undefined;
			value: unknown;
		}>,
	) => {
		setMatchTitleSelect(Number(e.target.value));
	};

	const fetchTournament = () => {
		const id = challongeIdRef?.current?.value;
		if (id) nodecg.sendMessage('fetchTournament', id);
	};

	const changePlayer = () => {
		const index = playerSelect - 1;
		if (0 > index) return;
		const p1name = challonge.data[index]?.match.player1_name ?? '';
		const p2name = challonge.data[index]?.match.player2_name ?? '';

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

	const handle3PMinus = () => {
		if (tournament.runner3.round <= 0) return;

		nodecg.sendMessage('editMatchRound', {
			index: 2,
			round: tournament.runner3.round - 1,
		});
	};
	const handle3PPlus = () => {
		nodecg.sendMessage('editMatchRound', {
			index: 2,
			round: tournament.runner3.round + 1,
		});
	};

	const handle4PMinus = () => {
		if (tournament.runner4.round <= 0) return;

		nodecg.sendMessage('editMatchRound', {
			index: 3,
			round: tournament.runner4.round - 1,
		});
	};
	const handle4PPlus = () => {
		nodecg.sendMessage('editMatchRound', {
			index: 3,
			round: tournament.runner4.round + 1,
		});
	};

	const resetAll = () => {
		const res = confirm('ラウンド数をリセットします。よろしいですか。');
		if (!res) return;

		nodecg.sendMessage('editMatchRound', {
			index: 0,
			round: 0,
		});

		nodecg.sendMessage('editMatchRound', {
			index: 1,
			round: 0,
		});

		nodecg.sendMessage('editMatchRound', {
			index: 2,
			round: 0,
		});

		nodecg.sendMessage('editMatchRound', {
			index: 3,
			round: 0,
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

			<Divider className={classes.divider} />

			{/*  トーナメントタイトル */}
			<Paper className={classes.paper}>
				<Typography variant={'h4'}>{challonge.tournamentName}</Typography>
			</Paper>

			{/* タイトル入力 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>N回戦の文字列</Typography>
				<div style={{display: 'flex'}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							padding: 5,
						}}
					>
						<div style={{marginBottom: 5}}>
							<Select
								className={classes.select}
								variant={'outlined'}
								value={matchTitleSelect}
								onChange={handleMatchTitleSelect}
							>
								<MenuItem key={'-'} value={0}>
									-
								</MenuItem>
								{matchTitleList.map((m, index) => {
									return (
										<MenuItem key={m.id} value={index + 1}>
											{m.matchTitle}
										</MenuItem>
									);
								})}
							</Select>
						</div>
						<TextField
							value={matchTitle}
							onChange={handleTextInput}
							variant={'outlined'}
							placeholder={'自由入力。何か入力していたら優先'}
						/>
					</div>
					<Button
						className={classes.button}
						onClick={editMatchname}
						variant={'contained'}
						color={'primary'}
					>
						反映
					</Button>
					<Button
						className={classes.button}
						onClick={resetMatchname}
						variant={'contained'}
						color={'secondary'}
					>
						リセット
					</Button>
				</div>
				{/* 表示中 */}
				<div>
					<Typography variant={'h6'}>【表示中】{tournament.title}</Typography>
				</div>
			</Paper>

			{/* 対戦者情報選択 */}
			<Paper className={classes.paper}>
				<Typography variant={'h5'}>対戦者情報選択</Typography>
				<div>
					<Select
						className={classes.select}
						variant={'outlined'}
						value={playerSelect}
						onChange={handlePlayerSelect}
					>
						<MenuItem key={'-'} value={0}>
							-
						</MenuItem>

						{challonge.data.map((data, index) => {
							const prefix = data.match.round < 0 ? '敗者復活' : '';
							const text = `${prefix}${Math.abs(data.match.round)}回戦 ${data
								.match.player1_name ?? '★未定★'} vs ${data.match.player2_name ??
								'★未定★'}`;
							return (
								<MenuItem key={`${text}_${index}`} value={index + 1}>
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

					{/* 3P */}
					<div className={classes.roundInfo}>
						3P
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle3PMinus}
						>
							<MinusIcon />
						</Button>
						<span>{tournament.runner3.round}</span>
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle3PPlus}
						>
							<PlusIcon />
						</Button>
					</div>

					{/* 4P */}
					<div className={classes.roundInfo}>
						4P
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle4PMinus}
						>
							<MinusIcon />
						</Button>
						<span>{tournament.runner4.round}</span>
						<Button
							className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={handle4PPlus}
						>
							<PlusIcon />
						</Button>
					</div>

					{/* リセットボタン */}
					<div className={classes.roundInfo} style={{marginLeft: 30}}>
						<Button
							// className={classes.miniButton}
							variant={'contained'}
							size={'small'}
							onClick={resetAll}
						>
							リセット
						</Button>
					</div>
				</div>
			</Paper>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

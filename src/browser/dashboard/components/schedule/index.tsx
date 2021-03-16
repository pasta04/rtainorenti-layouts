import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import React from 'react';
import styled from 'styled-components';
import {
	CurrentRun,
	NextRun,
	Schedule as ScheduleSchema,
	Timer,
} from '../../../../nodecg/replicants';
import {EditRun} from './edit';
import {RunInfo} from './run-info';
import {Typeahead} from './typeahead';
import {Button} from '@material-ui/core';
import {BorderedBox} from '../lib/bordered-box';

const currentRunRep = nodecg.Replicant('current-run');
const nextRunRep = nodecg.Replicant('next-run');
const scheduleRep = nodecg.Replicant('schedule');
const timerRep = nodecg.Replicant('timer');

const Container = styled(BorderedBox as any)`
	height: calc(100vh - 32px);
	padding: 16px;
	display: grid;
	grid-template-rows: auto 1fr;
	grid-gap: 12px;
`;

const SelectionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 50% 1fr;
	grid-gap: 8px;
`;

const RunInfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 0px 1fr;
	grid-gap: 16px;
`;

const Divider = styled.div`
	border-left: 1px dashed black;
`;

const EditControls = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 16px;
`;

const moveNextRun = () => {
	nodecg.sendMessage('nextRun');
};

const movePreviousRun = () => {
	nodecg.sendMessage('previousRun');
};

interface State {
	titles: Array<string | undefined>;
	currentRun?: CurrentRun;
	nextRun?: NextRun;
	edit?: 'current' | 'next';
	timer?: Timer;
}

export class Schedule extends React.Component<{}, State> {
	public state: State = {
		titles: [],
	};

	public componentDidMount() {
		scheduleRep.on('change', this.scheduleChangeHandler);
		currentRunRep.on('change', this.currentRunChangeHandler);
		nextRunRep.on('change', this.nextRunChangeHandler);
		timerRep.on('change', this.timerChangeHandler);
	}

	public componentWillUnmount() {
		scheduleRep.removeListener('change', this.scheduleChangeHandler);
		currentRunRep.removeListener('change', this.currentRunChangeHandler);
		nextRunRep.removeListener('change', this.nextRunChangeHandler);
	}

	public render() {
		const isRunning = this.state.timer?.timerState === 'Running';

		return (
			<Container>
				{/* ゲーム切り替え */}
				<SelectionContainer>
					<Button onClick={movePreviousRun} disabled={isRunning}>
						<ArrowBack />前
					</Button>
					{/* ゲームを指定してジャンプ */}
					<Typeahead titles={this.state.titles} disabled={isRunning} />
					<Button onClick={moveNextRun} disabled={isRunning}>
						次<ArrowForward />
					</Button>
				</SelectionContainer>

				<RunInfoContainer>
					{this.state.currentRun && (
						<RunInfo run={this.state.currentRun} label='現在のゲーム' />
					)}
					<Divider />
					{this.state.nextRun && (
						<RunInfo run={this.state.nextRun} label='次のゲーム' />
					)}
				</RunInfoContainer>
				<EditControls>
					<Button onClick={this.editCurrentRun}>編集：現在のゲーム</Button>
					<Button onClick={this.editNextRun}>編集：次のゲーム</Button>
				</EditControls>
				<EditRun
					edit={this.state.edit}
					defaultValue={
						(this.state.edit === 'current'
							? this.state.currentRun
							: this.state.nextRun) || undefined
					}
					onFinish={this.onEditFinish}
				/>
			</Container>
		);
	}

	private readonly editCurrentRun = () => {
		this.setState({edit: 'current'});
	};

	private readonly editNextRun = () => {
		this.setState({edit: 'next'});
	};

	private readonly onEditFinish = () => {
		this.setState({edit: undefined});
	};

	private readonly scheduleChangeHandler = (newVal: ScheduleSchema) => {
		if (!newVal) {
			return;
		}
		const titles = newVal.map((run) => run.title);
		this.setState({titles});
	};

	private readonly currentRunChangeHandler = (newVal: CurrentRun) => {
		if (!newVal) {
			return;
		}
		this.setState({currentRun: newVal});
	};

	private readonly nextRunChangeHandler = (newVal: NextRun) => {
		this.setState({nextRun: newVal || undefined});
	};

	private readonly timerChangeHandler = (newVal: Timer) => {
		this.setState({timer: newVal});
	};
}

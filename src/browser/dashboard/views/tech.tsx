import 'modern-normalize/modern-normalize.css';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import {Checklist} from '../components/checklist';
import {Schedule} from '../components/schedule';
import {Timekeeper} from '../components/timekeeper';

const Container = styled.div`
	color: #000;
	height: 100vh;
	padding: 16px;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
`;

const Column = styled.div`
	display: grid;
	grid-gap: 16px;
`;

const LeftColumn = styled(Column)`
	height: calc(100vh - 32px);
	grid-template-rows: 1fr auto;
`;

const appTheme = createMuiTheme({
	props: {
		MuiButton: {
			variant: 'contained',
		},
	},
});

export const App = () => (
	<MuiThemeProvider theme={appTheme}>
		<Container>
			<LeftColumn>
				<Timekeeper />
				<Checklist />
			</LeftColumn>
			<Column>
				<Schedule />
			</Column>
		</Container>
	</MuiThemeProvider>
);

ReactDom.render(<App />, document.getElementById('tech'));

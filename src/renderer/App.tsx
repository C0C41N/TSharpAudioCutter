import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from '@/styles';
import DragBar from '@comp/DragBar';
import Loading from '@comp/loading';
import Main from '@pages/Main';

const Container = styled.div`
	${flexCenter}
	width: 1160px;
	height: 760px;
`;

function App() {
	return (
		<Container>
			<DragBar />

			<Switch>
				<Route path='/main'>
					<Main />
				</Route>

				<Route path='/loading'>
					<Loading size='500px'></Loading>
				</Route>

				<Route path='/' exact>
					<Redirect to='/main' />
				</Route>
			</Switch>
		</Container>
	);
}

export default App;

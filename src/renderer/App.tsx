import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from '@/lib';
import Loading from '@pages/loading';
import Main from '@pages/main';

const Container = styled.div`
	${flexCenter}
	width: 1160px;
	height: 760px;
`;

function App() {
	return (
		<Container>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/main' />
				</Route>
				<Route path='/main' component={Main} />
				<Route path='/loading' component={Loading} />
			</Switch>
		</Container>
	);
}

export default App;

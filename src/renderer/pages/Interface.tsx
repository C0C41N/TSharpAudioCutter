import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { Close, MainDiv } from '@styles/pages/interface';

function Interface() {
	const { path } = useRouteMatch();

	const routes = [
		[path, <Main />],
		[`${path}/youtube`, <Youtube />],
		[`${path}/license`, <Registration />],
		[`${path}/files`, <Files />],
	] as [path: string, el: JSX.Element][];

	return (
		<MainDiv>
			<Close />
			{routes.map((e, i) => (
				<Route exact={i === 0} path={e[0]} key={i}>
					{({ match }) => (
						<CSSTransition
							in={match !== null}
							timeout={300}
							classNames='page'
							unmountOnExit
						>
							<div className='page'>{e[1]}</div>
						</CSSTransition>
					)}
				</Route>
			))}
		</MainDiv>
	);
}

export default Interface;

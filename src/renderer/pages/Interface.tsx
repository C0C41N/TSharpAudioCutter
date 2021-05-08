import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Modal from '@comp/modal';
import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { useStates } from '@services';
import { Close, MainDiv } from '@styles/pages/interface';
import { Lic } from '@types';

function Interface() {
	const { path } = useRouteMatch();
	const { License, Modal: $Modal } = useStates();
	const { set: setModal } = $Modal({ reactive: false });
	const { set: setLic, changed: onLic } = License({ reactive: false });

	onLic(e => {
		if (e === Lic.null) setModal({ show: true, loading: true });
		else setModal({ show: false, loading: true });
	});

	useEffect(() => {
		setTimeout(() => setLic(Lic.paid), 500);
	}, []);

	const routes = [
		[path, <Main />],
		[`${path}/youtube`, <Youtube />],
		[`${path}/license`, <Registration />],
		[`${path}/files`, <Files />],
	] as [path: string, el: JSX.Element][];

	return (
		<MainDiv>
			<Close />
			<Modal />
			{routes.map((e, i) => (
				<Route exact={i === 0} path={e[0]} key={i}>
					{({ match }) => (
						<CSSTransition
							in={match !== null}
							timeout={1}
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

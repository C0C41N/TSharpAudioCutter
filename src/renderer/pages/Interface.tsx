import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Modal from '@comp/modal';
import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { useStates } from '@services';
import { appInitHook } from '@services/apiAppInit';
import { Close, MainDiv } from '@styles/pages/interface';

function Interface() {
	const { replace } = useHistory();

	const { License, Modal: $Modal } = useStates();
	const { set: setModal } = $Modal({ reactive: false });
	const { set: setLic } = License({ reactive: false });

	appInitHook({ setLic, setModal, replace });

	const routes = [
		['/main', <Main />],
		['/main/youtube', <Youtube />],
		['/main/license', <Registration />],
		['/main/files', <Files />],
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

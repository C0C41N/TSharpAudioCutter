import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Modal from '@comp/modal';
import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { useStates } from '@services';
import { useAsyncEffect } from '@services/hooks';
import { appInit } from '@services/Lic';
import { Close, MainDiv } from '@styles/pages/interface';
import { Level, Lic } from '@types';

function Interface() {
	const { replace } = useHistory();
	const { License, Modal: $Modal } = useStates();
	const { set: setModal } = $Modal({ reactive: false });
	const { changed: onLic, set: setLic } = License();

	onLic(e => {
		if (e === Lic.null) setModal({ show: true, loading: true });
		else setModal({ show: false, loading: false });
	});

	const redirectToLicensePage = () => replace('/main/license');

	useAsyncEffect(async () => {
		const { type, data, func } = await appInit();

		if (type === 'error')
			// uncloseable modal
			return setModal({
				show: true,
				loading: false,
				level: Level.error,
				desc: 'Unexpected error from API',
				subDesc: `${data} | ${func}`,
			});

		if (typeof data === 'string') return; // for type assertion

		const { blocked, isLatest, lic } = data;

		if (blocked)
			// uncloseable modal
			return setModal({
				show: true,
				level: Level.error,
				loading: false,
				desc: 'Sorry, It looks like you’re blocked.',
				subDesc: 'Contact the creator for assistance.',
			});

		setLic(lic);

		if (!isLatest) {
			// TODO: Update
		}
	}, []);

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

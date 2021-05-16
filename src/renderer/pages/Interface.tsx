import React, { useEffect } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Modal from '@comp/modal';
import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { useStates } from '@services';
import { appInit, getCachedLic, setCachedLic } from '@services/checkLic';
import { Close, MainDiv } from '@styles/pages/interface';
import { Level, Lic } from '@types';

function Interface() {
	const { replace } = useHistory();
	const { License, Modal: $Modal } = useStates();
	const { set: setModal } = $Modal({ reactive: false });
	const { changed: onLic, set: setLic } = License({ reactive: false });

	onLic(e => {
		if (e === Lic.null) setModal({ show: true, loading: true });
		else setModal({ show: false, loading: false });
	});

	const redirectToLicensePage = () => replace('/main/license');

	useEffect(() => {
		(async () => {
			/**
			 * check local
			 * set lic
			 * get lic from api
			 * compare lic
			 * 	if not equal
			 * 		set lic
			 * 	if equal
			 * 		ignore
			 */

			const localLic = getCachedLic();

			console.log({ localLic });

			if (localLic === null) {
				redirectToLicensePage();
				setModal({ show: false, loading: false });
				return;
			}

			setLic(localLic);

			const { type, data, func } = await appInit();

			if (type === 'error') {
				setModal({
					show: true,
					loading: false,
					level: Level.error,
					desc: 'Unexpected error from API',
					subDesc: `${data} | ${func}`,
				});
				redirectToLicensePage();
			}
		})();
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

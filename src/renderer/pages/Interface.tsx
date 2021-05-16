import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Modal from '@comp/modal';
import Files from '@pages/Files';
import Main from '@pages/Main';
import Registration from '@pages/Registration';
import Youtube from '@pages/Youtube';
import { useStates } from '@services';
import { appInit, clearCachedLic, getCachedLic, setCachedLic } from '@services/Lic';
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
			const localLic = getCachedLic();

			if (localLic === null) {
				redirectToLicensePage();
				return setModal({ show: false, loading: false });
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

				clearCachedLic();
				setLic(Lic.null);

				return redirectToLicensePage();
			}

			if (typeof data === 'string') return;

			const { blocked, isLatest, lic } = data;

			if (blocked) {
				clearCachedLic();
				setLic(Lic.null);

				return setModal({
					show: true,
					level: Level.error,
					loading: false,
					desc: 'Sorry, It looks like you’re blocked.',
					subDesc: 'Contact the creator for assistance.',
				});
			}

			if (lic !== localLic) {
				setCachedLic(lic);
				setLic(lic);
			}

			if (!isLatest) {
				// TODO: Update
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

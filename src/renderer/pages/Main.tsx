import React, { Fragment } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import {
	Close, FilesBtn, Illustration, LicBtn, Logo, MainDiv, MainHeading, Watermark, YtBtn
} from '@styles/pages/main';

import Files from './Files';
import Registration from './Registration';
import Youtube from './Youtube';

function Main() {
	const history = useHistory();
	const { path, url } = useRouteMatch();

	const Main = () => (
		<Fragment>
			<Logo />
			<Watermark />
			<Illustration />
			<MainHeading>
				How do you wanna
				<br />
				proceed ?
			</MainHeading>
			<YtBtn
				onClick={() => {
					history.push(`${url}/youtube`);
				}}
			>
				I’ve youtube link
			</YtBtn>
			<FilesBtn
				onClick={() => {
					history.push(`${url}/files`);
				}}
			>
				I’ve audio files
			</FilesBtn>
			<LicBtn
				onClick={() => {
					history.push(`${url}/license`);
				}}
			>
				Change license key
			</LicBtn>
		</Fragment>
	);

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

export default Main;

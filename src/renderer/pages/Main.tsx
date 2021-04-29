import React, { Fragment } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
	FilesBtn, Illustration, LicBtn, Logo, MainHeading, Watermark, YtBtn
} from '@styles/pages/main';

function Main() {
	const history = useHistory();
	const { url } = useRouteMatch();

	return (
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
}

export default Main;

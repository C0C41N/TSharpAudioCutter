import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import {
	FilesBtn, Illustration, LicBtn, Logo, MainHeading, Watermark, YtBtn
} from '@styles/pages/main';

function Main() {
	const { push, location } = useHistory();
	const { pathname } = location;

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
					push(`${pathname}/youtube`);
				}}
			>
				I’ve youtube link
			</YtBtn>
			<FilesBtn
				onClick={() => {
					push(`${pathname}/files`);
				}}
			>
				I’ve audio files
			</FilesBtn>
			<LicBtn
				onClick={() => {
					push(`${pathname}/license`);
				}}
			>
				Change license key
			</LicBtn>
		</Fragment>
	);
}

export default Main;

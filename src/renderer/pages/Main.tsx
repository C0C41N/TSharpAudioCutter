import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { openFolder } from '@services/native';
import { outPath } from '@services/split';
import {
	FilesBtn, FolderBtn, Illustration, LicBtn, Logo, MainHeading, Watermark, YtBtn
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
			<FolderBtn
				onClick={async () => {
					openFolder(await outPath, true);
				}}
			>
				Open output folder
			</FolderBtn>
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

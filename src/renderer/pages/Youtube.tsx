import getYtId from 'get-youtube-id';
import React, { Fragment, useState } from 'react';

import Back from '@comp/back';
import { getFilePath, ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';

const url = 'https://www.youtube.com/watch?v=YmMtrNA7BOA';

function Youtube() {
	const { trunc } = Math;

	const [progress, setProgress] = useState(0);

	const start = async () => {
		setProgress(0.01);

		const YTDL = await ytdl;
		const vid = getYtId(url);

		if (!vid) return;

		YTDL.download(vid);

		YTDL.on('progress', e => setProgress(e.progress.percentage));

		YTDL.on('finished', async (e, d) =>
			console.log('Finished', JSON.stringify(await getFilePath(d)))
		);
	};

	const gProgress = (
		<Fragment>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${trunc(progress)}%`}</Percent>
		</Fragment>
	);

	return (
		<Fragment>
			<Back />
			<Heading>Paste youtube link</Heading>
			<Input
				placeholder='https://www.youtube.com/watch?v=DxNt7xV5aII'
				autoFocus
			/>
			{progress === 0 && <Btn onClick={start}>Start</Btn>}
			{progress > 0 && gProgress}
		</Fragment>
	);
}

export default Youtube;

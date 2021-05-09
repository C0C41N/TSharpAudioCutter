import getYtId from 'get-youtube-id';
import React, { Fragment, useState } from 'react';

import Back from '@comp/back';
import { ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';

const url = 'https://www.youtube.com/watch?v=YmMtrNA7BOA';

function Youtube() {
	const [progress, setProgress] = useState(25);

	const start = async () => {
		const YTDL = await ytdl;

		const vid = getYtId(url);

		if (!vid) return;

		// YTDL.download(vid);
		// YTDL.on('progress', e => console.log(JSON.stringify(e, null, '\t')));
		// YTDL.on('finished', (e, d) =>
		// 	console.log('Finished', JSON.stringify(d, null, '\t'))
		// );
	};

	const gProgress = (
		<Fragment>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${progress}%`}</Percent>
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
			<Btn onClick={start}>Start</Btn>
			{gProgress}
		</Fragment>
	);
}

export default Youtube;

import React, { Fragment, useState } from 'react';

import Back from '@comp/back';
import { ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';

function Youtube() {
	const [progress, setProgress] = useState(25);

	const start = async () => {
		const YTDL = await ytdl;
		// YTDL.download('https://www.youtube.com/watch?v=YmMtrNA7BOA');
		YTDL.download('YmMtrNA7BOA');
		YTDL.on('progress', e => console.log(JSON.stringify(e, null, '\t')));
		YTDL.on('finished', e => console.log('Finished'));
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

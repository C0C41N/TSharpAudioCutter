import React, { Fragment, useState } from 'react';

import Back from '@comp/back';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';

function Youtube() {
	const [progress, setProgress] = useState(25);

	return (
		<Fragment>
			<Back />
			<Heading>Paste youtube link</Heading>
			<Input
				placeholder='https://www.youtube.com/watch?v=DxNt7xV5aII'
				autoFocus
			/>
			<Btn>Done</Btn>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${progress}%`}</Percent>
		</Fragment>
	);
}

export default Youtube;

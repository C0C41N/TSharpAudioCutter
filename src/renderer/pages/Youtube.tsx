import getYtId from 'get-youtube-id';
import React, { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Back from '@comp/back';
import { useStates } from '@services';
import { sleep, traFile } from '@services/util';
import { getFilePath, ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';
import { Level } from '@types';

function Youtube() {
	const { trunc } = Math;

	const { Modal, Files } = useStates();
	const { set: setModal } = Modal({ reactive: false });
	const { set: setFiles } = Files({ reactive: false });

	const inputRef = useRef<HTMLInputElement>(null);
	const { push } = useHistory();

	const [progress, setProgress] = useState(0);
	const [red, setRed] = useState(false);

	const showErr = (subDesc = '') => {
		setModal({
			show: true,
			loading: false,
			level: Level.error,
			desc: 'Invalid URL',
			subDesc,
		});

		setProgress(0);
	};

	const validate = (): false | string => {
		const input = inputRef.current;
		if (input) {
			const url = input.value;
			if (url.length) return url;
			input.placeholder = 'bruh... paste a youtube link here!';
		}
		setRed(true);
		setTimeout(() => setRed(false), 300);
		return false;
	};

	const start = async () => {
		const url = validate();
		if (!url) return;

		setProgress(0.01);

		const YTDL = await ytdl;
		const vid = getYtId(url);

		if (!vid) return showErr();

		YTDL.download(vid);

		YTDL.on('error', (e: Error) => showErr(e.message));

		YTDL.on('progress', e => setProgress(e.progress.percentage));

		YTDL.on('finished', async (e, d) => {
			const filePath = await getFilePath(d);
			const file = await traFile(filePath);
			setFiles({ [file.id]: file });
			await sleep(300);
			push('/main/files');
		});
	};

	const enterInput = ({ key }: KeyboardEvent) => key === 'Enter' && start();

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
				onKeyDown={enterInput}
				redFlash={red}
				ref={inputRef}
				autoFocus
			/>
			{progress === 0 && <Btn onClick={start}>Start</Btn>}
			{progress > 0 && gProgress}
		</Fragment>
	);
}

export default Youtube;

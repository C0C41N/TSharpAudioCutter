import getYtId from 'get-youtube-id';
import React, { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Back from '@comp/back';
import { useStates } from '@services';
import { sleep, traFile } from '@services/util';
import { getFilePath, ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress, Status } from '@styles/pages/youtube';
import { Level } from '@types';

const placeholder = 'https://www.youtube.com/watch?v=DxNt7xV5aII';

function Youtube() {
	const { trunc } = Math;

	const { Modal, Files, FromYT } = useStates();
	const { val: modal, set: setModal } = Modal();
	const { set: setFiles } = Files({ reactive: false });
	const { set: setFromYT } = FromYT({ reactive: false });

	const inputRef = useRef<HTMLInputElement>(null);
	const { replace } = useHistory();

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
			const val = input.value;
			if (val.length) return val;
			input.placeholder = 'bruh... paste a youtube link here!';
		}
		setRed(true);
		setTimeout(() => setRed(false), 300);
		return false;
	};

	const start = async () => {
		if (modal.show) return;

		const url = validate();
		if (!url) return;

		setProgress(0.01);

		const YTDL = await ytdl;
		const vid = getYtId(url);

		if (!vid) return showErr();

		YTDL.download(vid);

		YTDL.on('error', (e: Error) => showErr(e.message));

		YTDL.on('progress', e => setProgress(e.progress.percentage));

		YTDL.on('finished', async (_, d) => {
			const filePath = await getFilePath(d);
			const file = await traFile(filePath);
			setFiles({ [file.id]: file });
			setFromYT(true);
			await sleep(300);
			replace('/main/files');
		});
	};

	const enterInput = ({ key }: KeyboardEvent) => key === 'Enter' && start();

	const gProgress = (
		<Fragment>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${trunc(progress)}%`}</Percent>
		</Fragment>
	);

	const showStart = () => progress === 0;
	const showProgr = () => progress > 0;
	const showCheck = () => progress === 0.01;
	const showDown = () => progress > 0.01 && progress < 100;
	const showDone = () => progress === 100;

	return (
		<Fragment>
			<Back />
			<Heading>Paste youtube link</Heading>
			<Input
				placeholder={placeholder}
				onKeyDown={enterInput}
				redFlash={red}
				ref={inputRef}
				autoFocus
			/>
			{showStart() && <Btn onClick={start}>Start</Btn>}
			{showProgr() && gProgress}
			{showCheck() && <Status>Checking the link...</Status>}
			{showDown() && <Status>Downloading...</Status>}
			{showDone() && <Status>Done!</Status>}
		</Fragment>
	);
}

export default Youtube;

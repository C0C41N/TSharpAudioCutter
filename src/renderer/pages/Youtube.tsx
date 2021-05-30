import getYtId from 'get-youtube-id';
import React, { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import Back from '@comp/back';
import { useStates } from '@services';
import { sleep, traFile } from '@services/util';
import { getFilePath, ytdl } from '@services/ytdl';
import { Btn, Heading, Input, Percent, Progress } from '@styles/pages/youtube';
import { Level } from '@types';

import type { IVideoTask } from 'youtube-mp3-downloader';

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

		const $finished = new Observable<{ file: string }>(e => {
			YTDL.on('finished', (_, d) => e.next(d));
		}).pipe(take(1));

		const $progress = new Observable<IVideoTask>(e => {
			YTDL.on('progress', o => e.next(o));
		}).pipe(takeUntil($finished));

		const $start = $progress.pipe(take(1));

		$start.subscribe(() => console.log('starting download.'));
		$progress.subscribe(e => setProgress(e.progress.percentage));

		$finished.subscribe(async d => {
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
			{progress === 0 && <Btn onClick={start}>Start</Btn>}
			{progress > 0 && gProgress}
		</Fragment>
	);
}

export default Youtube;

// TODO: checking video...

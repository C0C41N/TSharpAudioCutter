import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import Back from '@comp/back';
import FilesList from '@comp/filesList';
import { useFFmpeg, useNative, usePubSub, useStore, useUtil } from '@services';
import { BtnDone, BtnSelect, Error, Fade, Heading, SubHeading } from '@styles/pages/files';

const fileTypes = ['.mp3'];

function Files() {
	const { pubsub } = usePubSub();
	const { set, get } = useStore();
	const { path } = useNative();
	const { ffmpeg } = useFFmpeg();
	const { randomKey } = useUtil();
	const { extname } = path;

	const [files, setFiles] = useState<TraFileList>({});
	const [impure, setImpure] = useState(false);

	const inputFileRef = useRef<HTMLInputElement>(null);
	const selectFile = useCallback(() => inputFileRef.current?.click(), []);

	const filterByExt = useCallback((e: FileList): [File[], boolean] => {
		const arr = [...e];
		const filtered = arr.filter(o => fileTypes.includes(extname(o.name)));
		const impure = arr.some(o => !fileTypes.includes(extname(o.name)));
		return [filtered, impure];
	}, []);

	const getDur = useCallback(async (path: string) => {
		const { once, pub } = pubsub<number>();
		ffmpeg.ffprobe(path, (_, { format }) => pub(format.duration ?? 0));
		const dur = await once;

		if (!dur) return '#NA';

		const { trunc } = Math;
		const p: any = ['en-US', { minimumIntegerDigits: 2, useGrouping: false }];

		const min = trunc(dur / 60);
		const sec = trunc(dur % 60);

		return `${min.toLocaleString(...p)}:${sec.toLocaleString(...p)}`;
	}, []);

	const traFile = useCallback(async (file: File): Promise<TraFile> => {
		const id = randomKey(6);
		const dur = await getDur(file.path);
		const { name, path } = file;
		const status = 0;

		return { id, name, path, dur, status };
	}, []);

	const traFileList = useCallback(
		async (fileList: File[]): Promise<TraFileList> =>
			fileList.reduce(async (a: Promise<TraFileList>, e: File) => {
				const trFile = await traFile(e);
				const { id } = trFile;
				return { ...(await a), [id]: trFile };
			}, Promise.resolve({} as TraFileList)),
		[]
	);

	const inputChange = useCallback(
		async e => {
			const inputFile = e.target as HTMLInputElement;
			if (!inputFile.files) return;

			const [Files, impure] = filterByExt(inputFile.files);

			if (impure) {
				setImpure(true);
				console.log('impure');
				if (!Files.length) return;
			}

			const fileList = await traFileList(Files);
			set<TraFileList>('inputFiles', { ...files, ...fileList });
		},
		[files]
	);

	useEffect(() => {
		const sub = get<TraFileList>('inputFiles').subscribe(e => e && setFiles(e));

		return () => {
			sub.unsubscribe();
			set('inputFiles', {});
		};
	}, []);

	return (
		<Fragment>
			<Back />
			<Heading>Select your files</Heading>
			<SubHeading>Files should be mp3</SubHeading>
			<input
				multiple
				type='file'
				accept={fileTypes.join()}
				style={{ display: 'none' }}
				ref={inputFileRef}
				onChange={inputChange}
			/>
			<BtnSelect onClick={selectFile}>Select</BtnSelect>
			<BtnDone />
			<FilesList />
			<Fade />
			<Error
				state={impure}
				setState={setImpure}
				text='Some of the selected files were invalid hence excluded'
			/>
		</Fragment>
	);
}

export default Files;

export interface TraFile {
	id: string;
	name: string;
	path: string;
	dur: string;
	status: number;
}

export interface TraFileList {
	[key: string]: TraFile;
}

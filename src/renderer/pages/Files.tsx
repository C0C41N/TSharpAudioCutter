import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { btn, mont_600_17, mont_700_36, nuni_400_18 } from '@/styles';
import Back from '@comp/back';
import error from '@comp/error';
import FilesList from '@comp/filesList';
import { useComs, useFFmpeg, useNative, useUtil } from '@services';

const fileTypes = ['.mp3'];

const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 302px;
	height: 44px;
	left: 349px;
	top: 38px;
`;

const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 419px;
	top: 102px;
`;

const BtnSelect = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 145px;
`;

const BtnDone = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 517px;
`;

const Fade = styled.div`
	position: absolute;
	width: 794px;
	height: 36px;
	left: 100px;
	bottom: 110px;

	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

const Error = styled(error)`
	position: absolute;
	width: 383px;
	height: 17px;
	left: 309px;
	bottom: 104px;
`;

function Files() {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const { set, get, fire, wait } = useComs();
	const { path } = useNative();
	const { ffmpeg } = useFFmpeg();
	const { randomKey } = useUtil();
	const { extname } = path;

	const [files, setFiles] = useState<TraFileList>({});
	const [impure, setImpure] = useState(false);

	const selectFile = useCallback(() => inputFileRef.current?.click(), []);

	const filterByExt = useCallback((e: FileList): [File[], boolean] => {
		const arr = [...e];
		const files = arr.filter(o => fileTypes.includes(extname(o.name)));
		const impure = arr.some(o => !fileTypes.includes(extname(o.name)));
		return [files, impure];
	}, []);

	const getDur = useCallback(async (path: string) => {
		const key = randomKey(6);
		ffmpeg.ffprobe(path, (_, { format }) => fire(key, format.duration));
		const dur = await wait<number>(key);

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
			<BtnDone>Done</BtnDone>
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

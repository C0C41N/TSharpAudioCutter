import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import Back from '@comp/back';
import FilesList from '@comp/filesList';
import { useStates } from '@services';
import { path } from '@services/native';
import { traFile } from '@services/util';
import { BtnDone, BtnSelect, Error, Heading, SubHeading } from '@styles/pages/files';

import type { TraFileList } from '@types';
const fileTypes = ['.mp3'];

function Files() {
	const { Files } = useStates();
	const { val: files, set: setFiles } = Files();

	const { extname } = path;

	const [impure, setImpure] = useState(false);

	const inputFileRef = useRef<HTMLInputElement>(null);

	const selectFile = useCallback(() => inputFileRef.current?.click(), []);

	const filterByExt = useCallback((e: FileList): [File[], boolean] => {
		const arr = [...e];

		const filtered = arr.filter(o => fileTypes.includes(extname(o.name)));
		const impure = arr.some(o => !fileTypes.includes(extname(o.name)));

		return [filtered, impure];
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

			if (impure) setImpure(true);
			if (!Files.length) return;

			const fileList = await traFileList(Files);
			setFiles({ ...files, ...fileList });
		},
		[files]
	);

	useEffect(() => () => setFiles({}), []);

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
			<Error
				state={impure}
				setState={setImpure}
				text='Some of the selected files were invalid hence excluded'
			/>
		</Fragment>
	);
}

export default Files;

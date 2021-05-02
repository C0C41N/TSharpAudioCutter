import React, { useCallback, useEffect, useState } from 'react';

import { useStore } from '@services';
import {
	Cont, Dur, IconDone, IconMusic, IconProc, IconRemove, Title
} from '@styles/components/files';

import type { TraFile, TraFileList } from '@pages/Files';

function File(props: IProps) {
	const { set, get } = useStore();

	const [files, setFiles] = useState<TraFileList>({});

	const remove = useCallback(
		(id: string) => {
			const filteredFiles = Object.values(files)
				.filter(e => e.id !== id)
				.reduce((a: TraFileList, e: TraFile) => {
					return { ...a, [e.id]: e };
				}, {} as TraFileList);
			set('inputFiles', filteredFiles);
		},
		[files]
	);

	useEffect(() => {
		const sub = get<TraFileList>('inputFiles').subscribe(e => e && setFiles(e));

		return () => {
			sub.unsubscribe();
		};
	}, []);

	return (
		<Cont>
			<IconMusic />
			<Title>{props.title}</Title>
			{props.status === 1 && <IconProc />}
			{props.status === 2 && <IconDone />}
			<Dur>{props.dur}</Dur>
			<IconRemove onClick={() => remove(props.id)} />
		</Cont>
	);
}

export default File;

interface IProps {
	id: string;
	title: string;
	dur: string;
	status: number;
}

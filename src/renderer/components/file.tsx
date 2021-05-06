import React, { useCallback } from 'react';

import { useStates } from '@services';
import {
	Cont, Dur, IconDone, IconMusic, IconProc, IconRemove, Title
} from '@styles/components/files';

import type { TraFile, TraFileList } from '@pages/Files';

function File(props: IProps) {
	const { Files } = useStates();
	const { val: files, set: setFiles } = Files();

	const remove = useCallback(
		(id: string) => {
			const filteredFiles = Object.values(files())
				.filter(e => e.id !== id)
				.reduce((a: TraFileList, e: TraFile) => {
					return { ...a, [e.id]: e };
				}, {} as TraFileList);
			setFiles(filteredFiles);
		},
		[files()]
	);

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

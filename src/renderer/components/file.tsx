import React, { useCallback } from 'react';

import { useStates } from '@services';
import {
	Cont, Dur, IconDone, IconMusic, IconProc, IconRemove, Title
} from '@styles/components/files';

import type { TraFile, TraFileList } from '@types';

function File(props: Props) {
	const { Files } = useStates();
	const { val: files, set: setFiles } = Files();

	const { dur, id, name, status, ref } = props.file;

	const iconProc = status === 1;
	const iconDone = status === 2;
	const statusIcon = iconProc ? <IconProc /> : iconDone ? <IconDone /> : null;

	const remove = useCallback(
		(id: string) => {
			const filteredFiles = Object.values(files)
				.filter(e => e.id !== id)
				.reduce((a: TraFileList, e: TraFile) => {
					return { ...a, [e.id]: e };
				}, {} as TraFileList);

			setFiles(filteredFiles);
		},
		[files]
	);

	return (
		<Cont ref={e => (ref.current = e)}>
			<IconMusic />
			<Title>{name}</Title>
			{statusIcon}
			<Dur>{dur}</Dur>
			<IconRemove onClick={() => remove(id)} />
		</Cont>
	);
}

export default File;

interface Props {
	file: TraFile;
}

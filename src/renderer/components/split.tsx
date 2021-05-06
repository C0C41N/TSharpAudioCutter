import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStore } from '@services';
import { btn, mont_600_17 } from '@styles';

import type { TraFileList } from '@types';

const BtnDone = styled(btn)`
	${mont_600_17}
`;

function split(props: any) {
	const { observe: get } = useStore();

	const [files, setFiles] = useState<TraFileList>({});

	useEffect(() => {
		const sub = get<TraFileList>('inputFiles').subscribe(e => e && setFiles(e));

		return () => sub.unsubscribe();
	}, []);

	return !!Object.keys(files).length ? (
		<BtnDone {...props}>Done</BtnDone>
	) : null;
}

export default split;

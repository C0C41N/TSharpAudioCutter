import React from 'react';
import styled from 'styled-components';

import { useStates } from '@services';
import { btn, mont_600_17 } from '@styles';

const BtnDone = styled(btn)`
	${mont_600_17}
`;

function split(props: any) {
	const { Files, License } = useStates();
	const { val: files } = Files();

	return !!Object.keys(files).length ? (
		<BtnDone {...props}>Done</BtnDone>
	) : null;
}

export default split;

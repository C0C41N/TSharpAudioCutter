import React, { Fragment } from 'react';
import styled from 'styled-components';

import { mont_700_36, nuni_400_18 } from '@/styles';
import Back from '@comp/back';

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

function Files() {
	return (
		<Fragment>
			<Back />
			<Heading>Select your files</Heading>
			<SubHeading>Files should be mp3</SubHeading>
		</Fragment>
	);
}

export default Files;

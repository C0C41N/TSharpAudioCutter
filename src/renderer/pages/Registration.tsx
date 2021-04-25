import React, { Fragment } from 'react';
import styled from 'styled-components';

import { mont_700_36 } from '@/styles';
import Back from '@comp/back';

const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 233px;
	height: 44px;
	left: 384px;
	top: 68px;
`;

function Registration() {
	return (
		<Fragment>
			<Back />
			<Heading>Registration</Heading>
		</Fragment>
	);
}

export default Registration;

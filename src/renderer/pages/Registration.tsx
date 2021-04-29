import React, { Fragment } from 'react';
import styled from 'styled-components';

import { btn, input, mont_600_17, mont_700_36, nuni_400_18 } from '@/styles';
import Back from '@comp/back';
import registerIllus from '@comp/registerIllus';

const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 233px;
	height: 44px;
	left: 384px;
	top: 68px;
`;

const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 356px;
	top: 132px;
`;

const Illustration = styled(registerIllus)`
	position: absolute;
	width: 463.52px;
	height: 320px;
	left: 34px;
	top: 237px;
`;

const Input = styled(input)`
	position: absolute;
	width: 261px;
	height: 40px;
	left: 573px;
	top: 277px;
`;

const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 574px;
	top: 337px;
`;

function Registration() {
	return (
		<Fragment>
			<Back />
			<Heading>License</Heading>
			<SubHeading>Paste license key you got from HUD</SubHeading>
			<Illustration />
			<Input placeholder='zLTfb3s8NF' autoFocus />
			<Btn>Done</Btn>
		</Fragment>
	);
}

export default Registration;

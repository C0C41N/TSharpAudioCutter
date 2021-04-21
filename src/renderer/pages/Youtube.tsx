import React, { Fragment } from 'react';
import styled from 'styled-components';

import Back from '@comp/back';
import ytBtn from '@comp/ytBtn';
import ytHeading from '@comp/ytHeading';
import ytTextBox from '@comp/ytTextBox';

const Heading = styled(ytHeading)`
	position: absolute;
	left: 324px;
	top: 68px;
`;

const Input = styled(ytTextBox)`
	position: absolute;
	left: 190px;
	top: 218px;
`;

const Btn = styled(ytBtn)`
	position: absolute;
	left: 720px;
	top: 219px;
`;

function Youtube() {
	return (
		<Fragment>
			<Back />
			<Heading />
			<Input />
			<Btn>Done</Btn>
		</Fragment>
	);
}

export default Youtube;

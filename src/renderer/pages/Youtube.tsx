import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import Back from '@comp/back';
import ytBtn from '@comp/ytBtn';
import ytHeading from '@comp/ytHeading';
import ytProgress from '@comp/ytProgress';
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

const Progress = styled(ytProgress)`
	position: absolute;
	left: 190px;
	top: 357px;
`;

const Percent = styled.div`
	position: absolute;
	width: 49px;
	height: 29px;
	left: 741px;
	top: 347px;

	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	display: flex;
	align-items: center;
	text-align: center;

	color: #3f3d56;
`;

function Youtube() {
	const [progress, setProgress] = useState(25);

	return (
		<Fragment>
			<Back />
			<Heading />
			<Input />
			<Btn>Done</Btn>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${progress}%`}</Percent>
		</Fragment>
	);
}

export default Youtube;

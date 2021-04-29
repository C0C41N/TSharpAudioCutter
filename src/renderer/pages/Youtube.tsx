import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import Back from '@comp/back';
import progress from '@comp/progress';
import { btn, input, mont_600_17, mont_600_24, mont_700_36 } from '@styles';

const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	left: 324px;
	top: 68px;
`;

const Input = styled(input)`
	position: absolute;
	width: 500px;
	height: 40px;
	left: 190px;
	top: 218px;
`;

const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	left: 720px;
	top: 219px;
	height: 38px;
	width: 90px;
`;

const Progress = styled(progress)`
	position: absolute;
	left: 190px;
	top: 357px;
`;

const Percent = styled.div`
	${mont_600_24}
	position: absolute;
	width: 49px;
	height: 29px;
	left: 741px;
	top: 347px;
`;

function Youtube() {
	const [progress, setProgress] = useState(25);

	return (
		<Fragment>
			<Back />
			<Heading>Paste youtube link</Heading>
			<Input
				placeholder='https://www.youtube.com/watch?v=DxNt7xV5aII'
				autoFocus
			/>
			<Btn>Done</Btn>
			<Progress width={500} height={10} progress={progress} />
			<Percent>{`${progress}%`}</Percent>
		</Fragment>
	);
}

export default Youtube;

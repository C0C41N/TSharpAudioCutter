import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { Btn } from './close';

const Back = styled(Btn)`
	position: absolute;
	left: 31px;
	top: 27px;
`;

function back(props: any) {
	const { goBack } = useHistory();

	return (
		<Back {...props} onClick={goBack}>
			<svg
				width='9'
				height='14'
				viewBox='0 0 9 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z'
					fill='#808080'
				/>
			</svg>
		</Back>
	);
}

export default back;

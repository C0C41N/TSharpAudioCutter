import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '@/styles';
import { useNative } from '@services';

export const Btn = styled.div`
	cursor: pointer;

	width: 35px;
	height: 35px;

	border-radius: 100px;
	background: white;

	${flexCenter}

	&:hover {
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

function close(props: any) {
	const { exit } = useNative();

	return (
		<Btn {...props} onClick={exit}>
			<svg
				width='14'
				height='14'
				viewBox='0 0 14 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
					fill='#808080'
				/>
			</svg>
		</Btn>
	);
}

export default close;

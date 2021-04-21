import '@fonts/nunito-sans/400.css';

import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '@/styles';

const MainBtn = styled.div`
	${flexCenter}

	cursor: pointer;

	width: 320px;
	height: 46px;

	background: linear-gradient(90deg, #6397ff 0%, #6c63ff 100%);
	border-radius: 10px;

	&:hover {
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.8),
			5px -5px 10px rgba(217, 217, 217, 0.8),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

const Text = styled.div`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 33px;

	color: rgba(255, 255, 255, 0.99);
`;

function mainBtns(props: any) {
	return (
		<div {...props}>
			<MainBtn>
				<Text>I’ve youtube link</Text>
			</MainBtn>
			<MainBtn style={{ marginTop: 25 }}>
				<Text>I’ve audio files</Text>
			</MainBtn>
		</div>
	);
}

export default mainBtns;

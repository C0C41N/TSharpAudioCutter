import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '@/styles';

const Btn = styled.div`
	width: 90px;
	height: 38px;

	${flexCenter}

	background: #ffffff;
	border: 1px solid #d9d9d9;
	box-sizing: border-box;
	border-radius: 5px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	user-select: none;
	cursor: pointer;

	&:hover {
		border: none;
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

function ytBtn(props: any) {
	return <Btn {...props} />;
}

export default ytBtn;

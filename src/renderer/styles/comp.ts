import styled from 'styled-components';

import { flexCenter } from '@styles/classes';
import { mont_400_14, mont_600_14 } from '@styles/fonts';

export const btn = styled.div`
	${flexCenter}
	background: #ffffff;
	border: 1px solid #d9d9d9;
	box-sizing: border-box;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		border: none;
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

export const input = styled.input`
	${mont_600_14}
	border: 1px solid rgba(217, 217, 217, 0.9);
	box-sizing: border-box;
	border-radius: 10px;
	color: hsl(0deg 0% 35%);

	&::placeholder {
		${mont_400_14}
	}

	&:focus {
		outline: none;
		border-width: 2px;
	}
`;

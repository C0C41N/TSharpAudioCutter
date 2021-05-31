import styled, { css } from 'styled-components';

import { animRedFlash, flexCenter } from '@styles/classes';
import { mont_400_14, mont_600_14 } from '@styles/fonts';

// internal helpers

const btnShadow = css`
	box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
		5px -5px 10px rgba(217, 217, 217, 0.2),
		-5px -5px 10px rgba(255, 255, 255, 0.9),
		5px 5px 13px rgba(217, 217, 217, 0.9);
`;

const btnBorder = css`
	border: 1px solid #d9d9d9;
`;

// components

export const btn = styled.div`
	${flexCenter}
	${btnBorder}
	background: #ffffff;
	box-sizing: border-box;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		${btnShadow}
		border: none;
	}

	&:active {
		${btnShadow}
		${btnBorder}
	}
`;

export const input = styled.input<{ redFlash: boolean }>`
	${mont_600_14}
	border: 1px solid rgba(217, 217, 217, 0.9);
	box-sizing: border-box;
	border-radius: 10px;
	color: hsl(0deg 0% 35%);

	${p => (p.redFlash ? animRedFlash : '')}

	&::placeholder {
		${mont_400_14}
	}

	&:focus {
		outline: none;
		border-width: 2px;
	}
`;

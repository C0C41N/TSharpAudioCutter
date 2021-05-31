import styled, { css, keyframes } from 'styled-components';

import { flexCenter } from '@styles/classes';
import { mont_400_14, mont_600_14 } from '@styles/fonts';

const redFlash = keyframes`
  0% {
		border-color: red;
		border-width: 2px;
		transform: translateX(0);
	}

	100% {
		border-width: 2px;
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
    transform: translateX(10px);
  }

  80% {
    transform: translateX(8px);
  }

  90% {
    transform: translateX(-8px);
  }
`;

export const animRedFlash = css`
	animation: ${redFlash} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;

// TODO: pressed effect
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

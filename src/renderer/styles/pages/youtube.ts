import styled, { css, keyframes } from 'styled-components';

import progress from '@comp/progress';
import { btn, input, mont_600_17, mont_600_24, mont_700_36 } from '@styles';

export const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	left: 324px;
	top: 68px;
`;

const redFlash = keyframes`
	0%   {
		border-color: red;
		border-width: 2px;
		transform: translateX(0);
	}

	25%   {
		transform: translateX(5px);
	}

	50%   {
		transform: translateX(-5px);
	}

  100% { 
		border-color: rgba(217, 217, 217, 0.9);
		border-width: 2px;
		transform: translateX(0);
	}
`;

export const animRedFlash = css`
	animation: ${redFlash} 0.3s forwards ease-out;
`;

export const Input = styled(input)<{ redFlash: boolean }>`
	position: absolute;
	width: 500px;
	height: 40px;
	left: 190px;
	top: 218px;

	${p => (p.redFlash ? animRedFlash : '')}
`;

export const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	left: 720px;
	top: 219px;
	height: 38px;
	width: 90px;
`;

export const Progress = styled(progress)`
	position: absolute;
	left: 190px;
	top: 357px;
`;

export const Percent = styled.div`
	${mont_600_24}
	position: absolute;
	width: 49px;
	height: 29px;
	left: 741px;
	top: 347px;
`;

import styled, { css, keyframes } from 'styled-components';

import registerIllus from '@comp/registerIllus';
import { btn, input, mont_600_17, mont_700_36, nuni_400_18 } from '@styles';

export const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 233px;
	height: 44px;
	left: 384px;
	top: 68px;
`;

export const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 356px;
	top: 132px;
`;

export const Illustration = styled(registerIllus)`
	position: absolute;
	width: 463.52px;
	height: 320px;
	left: 34px;
	top: 237px;
`;

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

export const Input = styled(input)<{ redFlash: boolean }>`
	// TODO: refactor
	position: absolute;
	width: 261px;
	height: 40px;
	left: 573px;
	top: 277px;

	${p => (p.redFlash ? animRedFlash : '')}
`;

export const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 574px;
	top: 337px;
`;

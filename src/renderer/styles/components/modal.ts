import styled, { keyframes } from 'styled-components';

import { animFadeIn, animFadeOut } from '@styles';
import { btn } from '@styles/comp';
import { mont_600_17, mont_700_36, nuni_400_18, nuni_600_24 } from '@styles/fonts';

import type { Level } from '@types';
const hC = ['#CB3DDC', '#C8A500', '#CB3D2E'];

export const Btn = styled(btn)`
	${mont_600_17}

	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 361px;
`;

export const Backdrop = styled.div<B>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background: #ffffff;
	border-radius: 50px;

	${(p: B) => (p.fadeOut ? animFadeOut : animFadeIn)};

	z-index: 110;
`;

export const Heading = styled.div<hP>`
	${mont_700_36}
	color: ${(p: hP) => (p.level ? hC[p.level] : hC[0])};

	position: absolute;
	height: 44px;
	top: 68px;
	left: 50%;
	transform: translateX(-50%);
`;

export const Desc = styled.div`
	${nuni_600_24}

	position: absolute;
	height: 31px;
	top: 179px;
	right: 50%;
	transform: translateX(50%);
`;

export const SubDesc = styled.div`
	${nuni_400_18}

	position: absolute;
	height: 25px;
	top: 225px;
	left: 50%;
	transform: translateX(-50%);

	white-space: pre-wrap;
`;

const puffIn = keyframes`
	0% {
		filter: blur(4px);
    opacity: 0;
  }
  100% {
		filter: blur(0px);
    opacity: 1;
  }
`;

export const Dismiss = styled.div`
	${nuni_400_18}
	color: #CB3D2E;

	position: absolute;
	height: 25px;
	top: 515px;
	left: 50%;
	transform: translateX(-50%);
	animation: ${puffIn} 0.6s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;

interface B {
	fadeOut: boolean;
}

interface hP {
	className?: string;
	level?: Level;
}

import styled, { css, keyframes } from 'styled-components';

import { mont_700_36, nuni_400_18, nuni_600_24 } from '@styles/fonts';

import type { Level } from '@types';

const hC = ['#CB3DDC', '#C8A500', '#CB3D2E'];

const fadeIn = keyframes`
	0%   {
		opacity: 0;
		transform: scale(0.95);
	}

  100% { 
		opacity: 1;
		transform: scale(1);
	}
`;

const fadeOut = keyframes`
  0% { 
		opacity: 1;
		transform: scale(1);
	}

	100%   {
		opacity: 0;
		transform: scale(0.95);
	}
`;

const animFadeIn = css`
	animation: ${fadeIn} 0.3s forwards ease-in;
`;

const animFadeOut = css`
	animation: ${fadeOut} 0.3s forwards ease-out;
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
	color: ${(p: hP) => hC[p.level]};

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
`;

export const Dismiss = styled.div`
	${nuni_400_18}
	color: #CB3D2E;

	position: absolute;
	height: 25px;
	top: 515px;
	left: 50%;
	transform: translateX(-50%);
`;

interface B {
	fadeOut: boolean;
}

interface hP {
	className?: string;
	level: Level;
}

import styled, { css } from 'styled-components';

import { nuni_600_14, nuni_600_16 } from '@styles';

import { iconDone, iconMusic, iconProc, iconRemove } from './files.svg';

export const Cont = styled.div`
	position: relative;
	height: 44px;
	width: 780px;
	background: #ffffff;
	border-radius: 10px;

	margin: 10px;
	border: 1px solid #d9d9d9;
`;

export const IconMusic = styled(iconMusic)`
	position: absolute;
	width: 24px;
	height: 24px;
	left: 13px;
	top: 10px;
`;

export const IconRemove = styled(iconRemove)`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 20px;
	top: 10px;

	cursor: pointer;
	border-radius: 100px;
	border: 1px solid #d9d9d9;

	&:hover {
		border: none;
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

export const iconStatus = css`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 144px;
	top: 10px;
`;

export const IconProc = styled(iconProc)`
	${iconStatus}
`;

export const IconDone = styled(iconDone)`
	${iconStatus}
`;

export const Title = styled.div`
	${nuni_600_16}
	position: absolute;
	width: 400px;
	height: 20px;
	left: 47px;
	top: 12px;

	text-align: left;
	display: block;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const Dur = styled.div`
	${nuni_600_14}
	position: absolute;
	width: 50px;
	height: 20px;
	left: 656px;
	top: 12px;
`;

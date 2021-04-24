import '@fonts/nunito-sans/400.css';
import '@fonts/nunito-sans/600.css';
import '@fonts/nunito-sans/700.css';
import '@fonts/montserrat/400.css';
import '@fonts/montserrat/600.css';
import '@fonts/montserrat/700.css';

import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		height: 600px;
		width: 1000px;
		background-color: transparent;
	}
`;

export const flexCenter = css`
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const draggable = css`
	-webkit-app-region: drag;
`;

export const mont_600_17 = css`
	${flexCenter}
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	color: #808080;
`;

export const mont_600_14 = css`
	${flexCenter}
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #808080;
`;

export const nuni_600_24 = css`
	${flexCenter}
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 33px;
	color: #808080;
`;

export const btn = styled.div`
	${flexCenter}
	background: #ffffff;
	border: 1px solid #d9d9d9;
	box-sizing: border-box;
	border-radius: 5px;
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

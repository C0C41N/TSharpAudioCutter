import { createGlobalStyle, css } from 'styled-components';

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

import { css, keyframes } from 'styled-components';

export const flexCenter = css`
	align-items: center;
	display: flex;
	justify-content: center;
	text-align: center;
	user-select: none;
`;

export const draggable = css`
	-webkit-app-region: drag;
`;

export const fadeIn = keyframes`
	0%   {
		opacity: 0;
		transform: scale(0.95);
	}

  100% { 
		opacity: 1;
		transform: scale(1);
	}
`;

export const fadeOut = keyframes`
  0% { 
		opacity: 1;
		transform: scale(1);
	}

	100%   {
		opacity: 0;
		transform: scale(0.95);
	}
`;

export const animFadeIn = css`
	animation: ${fadeIn} 0.3s forwards ease-in;
`;

export const animFadeOut = css`
	animation: ${fadeOut} 0.3s forwards ease-out;
`;

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

// keyframes

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

export const redFlash = keyframes`
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

// anim

export const animFadeIn = css`
	animation: ${fadeIn} 0.3s forwards ease-in;
`;

export const animFadeOut = css`
	animation: ${fadeOut} 0.3s forwards ease-out;
`;

export const animRedFlash = css`
	animation: ${redFlash} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;

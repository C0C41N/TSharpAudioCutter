import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		height: 600px;
		width: 1000px;
		background-color: transparent;
	}

	.page {
	  position: absolute;
	  left: 0px;
	  right: 0px;
		top: 0px;
		bottom: 0px;
	}
	
	.page-enter {
	  opacity: 0;
	}
	
	.page-enter-active {
	  opacity: 1;
	}

	.page-enter > * {
		opacity: 0;
		transform: scale(0.9);
	}
	
	.page-enter-done > * {
		opacity: 1;
		transform: scale(1);
		transition: opacity 300ms, transform 300ms;
	}

	.page-enter-done :nth-child(1) { transition-delay: .0s }
	.page-enter-done :nth-child(2) { transition-delay: .1s }
	.page-enter-done :nth-child(3) { transition-delay: .2s }
	.page-enter-done :nth-child(4) { transition-delay: .3s }
	.page-enter-done :nth-child(5) { transition-delay: .4s }
	.page-enter-done :nth-child(6) { transition-delay: .5s }
	.page-enter-done :nth-child(7) { transition-delay: .6s }
	.page-enter-done :nth-child(8) { transition-delay: .7s }
	.page-enter-done :nth-child(9) { transition-delay: .8s }

	.page-exit {
	  opacity: 1;
	  transform: scale(1);
	}
	
	.page-exit-active {
	  opacity: 0;
	  transform: scale(0.95);
	  transition: opacity 300ms, transform 300ms;
	}
`;

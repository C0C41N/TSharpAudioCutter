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
	  transform: scale(0.95);
	}
	
	.page-enter-active {
	  opacity: 1;
	  transform: scale(1);
	  transition: opacity 300ms, transform 300ms;
	}
	
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

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider, services } from '@services';

import App from './App';
import { GlobalStyle } from './styles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider value={services}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

import.meta.hot && import.meta.hot.accept();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import DragBar from '@comp/DragBar';
import { Provider, services } from '@services';

import App from './App';
import { GlobalStyle } from './styles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider value={services}>
			<DragBar />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

import.meta.hot && import.meta.hot.accept();

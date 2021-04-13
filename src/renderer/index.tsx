import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import DragBar from '@comp/DragBar';
import { Provider, services } from '@services';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider value={services}>
			<DragBar />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

import.meta.hot && import.meta.hot.accept();
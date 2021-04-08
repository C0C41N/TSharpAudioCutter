import './App.css';

import React, { useEffect, useState } from 'react';

import { useUtil } from '@services';

const logo = './assets/logo.svg';

function App() {
	const { randomKey } = useUtil();

	const [key, setKey] = useState(randomKey(6));

	useEffect(() => {
		//
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setKey(randomKey(6)), 100);
		return () => clearTimeout(timer);
	});

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Key: <code>{key}</code>
				</p>
			</header>
		</div>
	);
}

export default App;

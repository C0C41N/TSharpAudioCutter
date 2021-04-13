import './App.css';

import React, { useEffect, useState } from 'react';

import { useLog, useSplit, useUtil } from '@services';

const logo = './assets/logo.svg';

function App() {
	const { randomKey } = useUtil();
	const { Long } = useSplit();
	const { cls, log } = useLog();

	const [key, setKey] = useState(randomKey(6));

	useEffect(() => {
		cls();
		Long('C:\\__Sandbox\\audio.mp3').subscribe(log);
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

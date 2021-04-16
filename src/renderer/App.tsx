import './App.scss';

import React from 'react';

import Close from '@comp/close';
import Logo from '@comp/logo';

function App() {
	return (
		<div className='container'>
			<div id='main'>
				<Close></Close>
				<Logo></Logo>
			</div>
		</div>
	);
}

export default App;

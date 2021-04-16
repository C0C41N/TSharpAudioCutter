import './App.scss';

import React from 'react';

import Close from '@comp/close';
import Logo from '@comp/logo';
import Watermark from '@comp/watermark';

function App() {
	return (
		<div className='container'>
			<div id='main'>
				<Close className='close'></Close>
				<Logo className='logo'></Logo>
				<Watermark className='watermark'></Watermark>
			</div>
		</div>
	);
}

export default App;

import './App.scss';

import React from 'react';

import Close from '@comp/close';
import Illustration from '@comp/illustration';
import Logo from '@comp/logo';
import MainHeading from '@comp/MainHeading';
import Watermark from '@comp/watermark';

function App() {
	return (
		<div className='container'>
			<div id='main'>
				<Close className='close'></Close>
				<Logo className='logo'></Logo>
				<Watermark className='watermark'></Watermark>
				<Illustration className='illustration'></Illustration>
				<MainHeading className='mainHeading'></MainHeading>
			</div>
		</div>
	);
}

export default App;

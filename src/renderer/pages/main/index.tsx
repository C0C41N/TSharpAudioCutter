import './App.scss';

import React from 'react';

import Close from '@comp/Close';
import Illustration from '@comp/Illustration';
import Logo from '@comp/Logo';
import MainBtns from '@comp/MainBtns';
import MainHeading from '@comp/MainHeading';
import Watermark from '@comp/Watermark';

function App() {
	return (
		<div className='container'>
			<div id='main'>
				<Close className='close'></Close>
				<Logo className='logo'></Logo>
				<Watermark className='watermark'></Watermark>
				<Illustration className='illustration'></Illustration>
				<MainHeading className='mainHeading'></MainHeading>
				<MainBtns className='mainBtns'></MainBtns>
			</div>
		</div>
	);
}

export default App;

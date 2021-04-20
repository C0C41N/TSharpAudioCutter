import './App.scss';

import React from 'react';

import Close from '@comp/Close';

function App() {
	return (
		<div className='container'>
			<div id='main'>
				<Close className='close'></Close>
			</div>
		</div>
	);
}

export default App;

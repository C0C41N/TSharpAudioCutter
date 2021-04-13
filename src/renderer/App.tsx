import './App.scss';

import React from 'react';

import { useNative } from '@services';
import { svgClose, svgIllus, svgMainH, svgWatermark } from '@svgs';

function App() {
	const { exit } = useNative();

	return (
		<div id='main'>
			<div id='close' onClick={exit}>
				{svgClose()}
			</div>
			<div id='watermark'>{svgWatermark()}</div>
			<div id='illus'>{svgIllus()}</div>
			<div id='mainHeading'>{svgMainH()}</div>
		</div>
	);
}

export default App;

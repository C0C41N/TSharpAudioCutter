import React from 'react';
import styled from 'styled-components';

import { draggable } from '@/styles';

function dragBar() {
	const DragBar = styled.div`
		background-color: transparent;
		cursor: move;
		height: 50px;
		left: 80px;
		position: absolute;
		right: 164px;
		top: 80px;
		z-index: 100;

		${draggable}
	`;

	return <DragBar />;
}

export default dragBar;

import React from 'react';
import styled from 'styled-components';

import { draggable } from '@styles';

const DragBar = styled.div`
	background-color: transparent;
	cursor: move;
	height: 50px;
	left: 160px;
	position: absolute;
	right: 160px;
	top: 80px;
	z-index: 100;

	${draggable}
`;

function dragBar() {
	return <DragBar />;
}

export default dragBar;

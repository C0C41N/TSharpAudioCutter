import React from 'react';
import styled from 'styled-components';

import { draggable } from '@/styles';

const DragBar = styled.div`
	background-color: transparent;
	cursor: move;
	height: 50px;
	left: 80px;
	position: absolute;
	right: 164px;
	top: 58px;

	${draggable}
`;

export default () => <DragBar></DragBar>;

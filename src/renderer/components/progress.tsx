import React from 'react';
import styled from 'styled-components';

interface IProps {
	progress: number;
	height: number;
	width: number;
}

const Bar = styled.div`
	--width: ${(e: IProps) => e.width}px;
	--height: ${(e: IProps) => e.height}px;
	--progress: ${(e: IProps) => e.progress};
	position: absolute;
	width: var(--width);
	height: var(--height);
	left: 190px;
	top: 357px;

	background: #e5e5e5;
`;

const Thumb = styled.div`
	width: calc(var(--width) * var(--progress) / 100);
	height: var(--height);
	background: #3f3d56;
`;

function progress(props: IProps) {
	return (
		<Bar {...props}>
			<Thumb />
		</Bar>
	);
}

export default progress;

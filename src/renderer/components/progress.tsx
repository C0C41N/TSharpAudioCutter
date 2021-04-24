import React from 'react';
import styled from 'styled-components';

interface Props {
	progress: number;
	height: number;
	width: number;
}

const Bar = styled.div`
	--width: ${(e: Props) => e.width}px;
	--height: ${(e: Props) => e.height}px;
	--progress: ${(e: Props) => e.progress};
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

function progress(props: Props) {
	return (
		<Bar {...props}>
			<Thumb />
		</Bar>
	);
}

export default progress;

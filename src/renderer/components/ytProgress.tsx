import React from 'react';
import styled from 'styled-components';

interface Props {
	progress: number;
	height: number;
	width: number;
}

const Bar = styled.div`
	--width: ${(props: Props) => props.width}px;
	--height: ${(props: Props) => props.height}px;
	--progress: ${(props: Props) => props.progress};
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
	background: #6c63ff;
`;

function ytProgress(props: Props) {
	return (
		<Bar {...props}>
			<Thumb />
		</Bar>
	);
}

export default ytProgress;

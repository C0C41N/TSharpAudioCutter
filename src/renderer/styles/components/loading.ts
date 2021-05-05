import styled, { keyframes } from 'styled-components';

const flip = keyframes`
	0% {
		transform: rotate(0);
	}
	
	50% {
		transform: rotateY(180deg);
	}
	
	100% {
		transform: rotateY(180deg) rotateX(180deg);
	}
`;

const loader = styled.div`
	width: var(--size);
	height: var(--size);

	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);

	-webkit-perspective: var(--persp);
	-moz-perspective: var(--persp);
	-ms-perspective: var(--persp);
	perspective: var(--persp);

	&:before {
		content: '';
		position: absolute;
		left: calc(var(--size) / 4);
		top: calc(var(--size) / 4);
		width: calc(var(--size) / 2);
		height: calc(var(--size) / 2);
		background-color: var(--color);
		animation: ${flip} 1s infinite;
	}
`;

const Loading = styled(loader)<{ size?: string }>`
	--size: ${p => (p.size ? p.size : '100px')};
	--color: #6c63ff;
	--persp: calc(var(--size) + 50px);
`;

export default Loading;

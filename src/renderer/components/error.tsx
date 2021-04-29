import React from 'react';
import styled, { keyframes } from 'styled-components';

import { mont_400_14 } from '@styles';

const dur = 5;

const fade = keyframes`
	0% {
		opacity: 0;
	}
	
	10% {
		opacity: 1;
		
	}
	
	70% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
`;

const Err = styled.div`
	${mont_400_14}
	color: #FF0000F2;
	animation: ${fade} ${dur}s forwards ease-in-out;
`;

function error(props: IProps) {
	if (props.state) {
		setTimeout(() => {
			props.setState(false);
		}, dur * 1000);

		return <Err className={props.className}>{props.text}</Err>;
	}

	return null;
}

export default error;

interface IProps {
	className?: string;
	text: string;
	state: boolean;
	setState: (state: boolean) => void;
}

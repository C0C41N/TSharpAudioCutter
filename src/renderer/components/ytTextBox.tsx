import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 500px;
	height: 40px;

	border: 1px solid rgba(217, 217, 217, 0.9);
	box-sizing: border-box;
	border-radius: 10px;

	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: hsl(0deg 0% 35%);

	&::placeholder {
		display: flex;
		align-items: center;
		text-align: center;
		font-weight: normal;
		color: #cccccc;
	}

	&:focus {
		outline: none;
		border-width: 2px;
	}
`;

function ytTextBox(props: any) {
	return (
		<Input
			{...props}
			placeholder='https://www.youtube.com/watch?v=DxNt7xV5aII'
		/>
	);
}

export default ytTextBox;

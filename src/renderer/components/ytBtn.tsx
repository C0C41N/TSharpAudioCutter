import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
	width: 90px;
	height: 40px;

	background: #ffffff;
	border-radius: 10px;

	&:hover {
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

function ytBtn(props: any) {
	return <Btn {...props} />;
}

export default ytBtn;

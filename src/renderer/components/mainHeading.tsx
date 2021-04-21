import React from 'react';
import styled from 'styled-components';

export const MainHeading = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 44px;

	color: #3f3d56;

	text-shadow: 0px 4px 4px rgba(108, 99, 255, 0.25);

	user-select: none;
`;

function mainHeading(props: any) {
	return (
		<MainHeading {...props}>
			How do you wanna
			<br />
			proceed ?
		</MainHeading>
	);
}

export default mainHeading;

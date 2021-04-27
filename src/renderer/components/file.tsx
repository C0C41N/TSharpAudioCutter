import React from 'react';
import styled from 'styled-components';

import { nuni_600_14, nuni_700_16 } from '@/styles';

const Cont = styled.div`
	position: relative;
	height: 44px;
	width: 780px;
	background: #ffffff;
	border-radius: 10px;

	margin: 10px;

	box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.0196802),
		0px 1.6711px 12.9511px rgba(0, 0, 0, 0.0282725),
		0px 0.893452px 6.92426px rgba(0, 0, 0, 0.035),
		0px 0.500862px 3.88168px rgba(0, 0, 0, 0.0417275),
		0px 0.266004px 2.06153px rgba(0, 0, 0, 0.0503198),
		0px 0.11069px 0.85785px rgba(0, 0, 0, 0.07);

	&:last-child {
		margin-bottom: 100px;
	}
`;

const iconMusic = (props: any) => (
	<svg
		{...props}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12Z'
			fill='#808080'
		/>
	</svg>
);

const IconMusic = styled(iconMusic)`
	position: absolute;
	width: 24px;
	height: 24px;
	left: 13px;
	top: 10px;
`;

const Title = styled.div`
	${nuni_700_16}
	position: absolute;
	width: 400px;
	height: 20px;
	left: 47px;
	top: 12px;
	justify-content: left;
`;

const Dur = styled.div`
	${nuni_600_14}
	position: absolute;
	width: 50px;
	height: 20px;
	left: 656px;
	top: 12px;
`;

function File(props: IProps) {
	return (
		<Cont>
			<IconMusic />
			<Title>{props.title}</Title>
			<Dur>{props.dur}</Dur>
		</Cont>
	);
}

export default File;

interface IProps {
	title: string;
	dur: string;
}

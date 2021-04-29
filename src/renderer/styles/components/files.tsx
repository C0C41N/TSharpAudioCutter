import styled, { css } from 'styled-components';

import { nuni_600_14, nuni_600_16 } from '@styles';

export const Cont = styled.div`
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

export const iconMusic = (props: any) => (
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

export const iconRemove = (props: any) => (
	<svg
		{...props}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='24' height='24' rx='12' fill='white' />
		<path d='M19 13H5V11H19V13Z' fill='#808080' />
	</svg>
);

export const iconDone = (props: any) => (
	<svg
		{...props}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z'
			fill='#808080'
		/>
	</svg>
);

export const iconProc = (props: any) => (
	<svg
		{...props}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z'
			fill='#3F3D56'
		/>
	</svg>
);

export const IconMusic = styled(iconMusic)`
	position: absolute;
	width: 24px;
	height: 24px;
	left: 13px;
	top: 10px;
`;

export const IconRemove = styled(iconRemove)`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 20px;
	top: 10px;

	cursor: pointer;
	border-radius: 100px;
	border: 1px solid #d9d9d9;

	&:hover {
		border: none;
		box-shadow: -5px 5px 10px rgba(217, 217, 217, 0.2),
			5px -5px 10px rgba(217, 217, 217, 0.2),
			-5px -5px 10px rgba(255, 255, 255, 0.9),
			5px 5px 13px rgba(217, 217, 217, 0.9);
	}
`;

export const iconStatus = css`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 144px;
	top: 10px;
`;

export const IconProc = styled(iconProc)`
	${iconStatus}
`;

export const IconDone = styled(iconDone)`
	${iconStatus}
`;

export const Title = styled.div`
	${nuni_600_16}
	position: absolute;
	width: 400px;
	height: 20px;
	left: 47px;
	top: 12px;

	text-align: left;
	display: block;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const Dur = styled.div`
	${nuni_600_14}
	position: absolute;
	width: 50px;
	height: 20px;
	left: 656px;
	top: 12px;
`;

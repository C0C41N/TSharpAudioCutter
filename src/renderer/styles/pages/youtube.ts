import styled from 'styled-components';

import progress from '@comp/progress';
import { btn, input, mont_600_17, mont_600_24, mont_700_36 } from '@styles';
import { nuni_400_18 } from '@styles/fonts';

export const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	left: 324px;
	top: 68px;
`;

export const Input = styled(input)`
	position: absolute;
	width: 500px;
	height: 40px;
	left: 190px;
	top: 218px;
`;

export const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	left: 720px;
	top: 219px;
	height: 38px;
	width: 90px;
`;

export const Progress = styled(progress)`
	position: absolute;
	left: 190px;
	top: 357px;
`;

export const Percent = styled.div`
	${mont_600_24}
	position: absolute;
	width: 49px;
	height: 29px;
	left: 741px;
	top: 347px;
`;

export const Status = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 190px;
	top: 450px;
`;

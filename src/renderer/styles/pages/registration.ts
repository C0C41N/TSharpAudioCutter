import styled from 'styled-components';

import registerIllus from '@comp/registerIllus';
import { btn, input, mont_600_17, mont_700_36, nuni_400_18 } from '@styles';

export const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 233px;
	height: 44px;
	left: 384px;
	top: 68px;
`;

export const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 356px;
	top: 132px;
`;

export const Illustration = styled(registerIllus)`
	position: absolute;
	width: 463.52px;
	height: 320px;
	left: 34px;
	top: 237px;
`;

export const Input = styled(input)`
	position: absolute;
	width: 261px;
	height: 40px;
	left: 573px;
	top: 277px;
`;

export const Btn = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 574px;
	top: 337px;
`;

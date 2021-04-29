import styled from 'styled-components';

import error from '@comp/error';
import split from '@comp/split';
import { btn, mont_600_17, mont_700_36, nuni_400_18 } from '@styles';

export const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 302px;
	height: 44px;
	left: 349px;
	top: 38px;
`;

export const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 419px;
	top: 102px;
`;

export const BtnSelect = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 145px;
`;

export const BtnDone = styled(split)`
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 517px;
`;

export const Fade = styled.div`
	position: absolute;
	width: 794px;
	height: 36px;
	left: 100px;
	bottom: 110px;

	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

export const Error = styled(error)`
	position: absolute;
	width: 383px;
	height: 17px;
	left: 309px;
	bottom: 104px;
`;

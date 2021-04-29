import styled from 'styled-components';

import close from '@comp/close';
import logo from '@comp/logo';
import mainIllus from '@comp/mainIllus';
import watermark from '@comp/watermark';
import { btn, mont_600_14, mont_700_36, nuni_600_24 } from '@styles';

export const MainDiv = styled.div`
	position: relative;
	width: 1000px;
	height: 600px;
	background: white;
	border-radius: 50px;

	box-shadow: 0px 22px 80px rgba(0, 0, 0, 0.07),
		0px 9.99091px 33.4221px rgba(0, 0, 0, 0.0503198),
		0px 5.45393px 17.869px rgba(0, 0, 0, 0.0417275),
		0px 3.05174px 10.0172px rgba(0, 0, 0, 0.035),
		0px 1.59022px 5.32008px rgba(0, 0, 0, 0.0282725),
		0px 0.639341px 2.21381px rgba(0, 0, 0, 0.0196802);
`;

export const Close = styled(close)`
	position: absolute;
	top: 27px;
	right: 31px;
`;

export const Logo = styled(logo)`
	position: absolute;
	left: 37px;
	top: 26px;
`;

export const Watermark = styled(watermark)`
	position: absolute;
	left: 284px;
	top: 37px;
`;

export const Illustration = styled(mainIllus)`
	position: absolute;
	left: 34px;
	top: 237px;
`;

export const MainHeading = styled.div`
	${mont_700_36}
	position: absolute;
	top: 145px;
	right: 124px;
	text-align: left;
`;

export const Btn = styled(btn)`
	${nuni_600_24}
	width: 320px;
	height: 44px;
`;

export const YtBtn = styled(Btn)`
	position: absolute;
	left: 515px;
	top: 333px;
`;

export const FilesBtn = styled(Btn)`
	position: absolute;
	left: 515px;
	top: 413px;
`;

export const LicBtn = styled.div`
	${mont_600_14}
	position: absolute;
	width: 162px;
	height: 17px;
	left: 594px;
	top: 517px;
	text-transform: uppercase;
	color: #3f3d56;
	cursor: pointer;
	user-select: none;

	&:hover {
		text-decoration-line: underline;
	}
`;

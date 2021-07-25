import styled from 'styled-components';

import logo from '@comp/logo';
import mainIllus from '@comp/mainIllus';
import watermark from '@comp/watermark';
import { btn, mont_600_14, mont_700_36, nuni_600_24 } from '@styles';

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
	top: 308px;
`;

export const FilesBtn = styled(Btn)`
	position: absolute;
	left: 515px;
	top: 388px;
`;

export const sBtn = styled.div`
	${mont_600_14}
	text-transform: uppercase;
	color: #3f3d56;
	cursor: pointer;
	user-select: none;

	&:hover {
		text-decoration-line: underline;
	}
`;

export const FolderBtn = styled(sBtn)`
	position: absolute;
	width: 171px;
	height: 17px;
	left: 590px;
	top: 472px;
`;

export const LicBtn = styled(sBtn)`
	position: absolute;
	width: 162px;
	height: 17px;
	left: 594px;
	top: 517px;
`;

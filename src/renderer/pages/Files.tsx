import React, { Fragment } from 'react';
import styled from 'styled-components';

import { btn, mont_600_17, mont_700_36, nuni_400_18 } from '@/styles';
import Back from '@comp/back';

const Heading = styled.div`
	${mont_700_36}
	position: absolute;
	width: 302px;
	height: 44px;
	left: 349px;
	top: 38px;
`;

const SubHeading = styled.div`
	${nuni_400_18}
	position: absolute;
	height: 25px;
	left: 419px;
	top: 102px;
`;

const BtnSelect = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 145px;
`;

const BtnDone = styled(btn)`
	${mont_600_17}
	position: absolute;
	width: 260px;
	height: 38px;
	left: 370px;
	top: 517px;
`;

const Container = styled.div`
	position: absolute;
	width: 810px;
	height: 280px;
	left: 100px;
	top: 202px;
`;

const List = styled.div`
	width: calc(780px + 17px);
	height: 100%;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const File = styled.div`
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

const Fade = styled.div`
	position: absolute;
	width: 794px;
	height: 36px;
	left: 100px;
	bottom: 110px;

	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
		linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

const Scroll = styled.div`
	position: absolute;
	width: 5px;
	height: 260px;
	right: 0px;
	top: 10px;

	background: #cccccc;
	border-radius: 10px;
`;

const Thumb = styled.div`
	position: absolute;
	width: 3px;
	height: 50px;
	right: 1px;
	top: 1px;

	background: #3f3d56;
	border-radius: 10px;
`;

function Files() {
	return (
		<Fragment>
			<Back />
			<Heading>Select your files</Heading>
			<SubHeading>Files should be mp3</SubHeading>
			<BtnSelect>Select</BtnSelect>
			<BtnDone>Done</BtnDone>
			<Container>
				<List>
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
					<File />
				</List>
				<Scroll>
					<Thumb />
				</Scroll>
			</Container>
			<Fade />
		</Fragment>
	);
}

export default Files;

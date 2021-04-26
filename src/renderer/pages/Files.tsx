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
	width: 800px;
	height: 260px;
	left: 110px;
	top: 212px;

	height: 260px;
	width: 800px;
	overflow: hidden;
`;

const List = styled.div`
	width: 780px;
	background-color: #ffffff;
`;

const File = styled.div`
	height: 44px;
	width: 780px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
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
			</Container>
		</Fragment>
	);
}

export default Files;

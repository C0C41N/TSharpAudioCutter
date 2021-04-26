import React, { Fragment, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { btn, mont_600_17, mont_700_36, nuni_400_18 } from '@/styles';
import Back from '@comp/back';
import FilesList from '@comp/filesList';

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

function Files() {
	const inputFileRef = useRef<HTMLInputElement>(null);

	const selectFile = useCallback(() => {
		const inputFile = inputFileRef.current;
		if (!inputFile) return;

		inputFile.click();
	}, []);

	const inputChange = useCallback(e => {
		const inputFile = e.target as HTMLInputElement;
		console.log(inputFile.files);
	}, []);

	return (
		<Fragment>
			<Back />
			<Heading>Select your files</Heading>
			<SubHeading>Files should be mp3</SubHeading>
			<input
				multiple
				type='file'
				accept='audio/mp3'
				style={{ display: 'none' }}
				ref={inputFileRef}
				onChange={inputChange}
			/>
			<BtnSelect onClick={selectFile}>Select</BtnSelect>
			<BtnDone>Done</BtnDone>
			<FilesList />
			<Fade />
		</Fragment>
	);
}

export default Files;

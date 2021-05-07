import styled from 'styled-components';

import { useStates } from '@services';
import { sleep } from '@services/util';
import { btn, mont_600_17 } from '@styles';
import { Lic, Status, TraFile } from '@types';

const BtnDone = styled(btn)`
	${mont_600_17}
`;

function split(props: any) {
	const { Files, License } = useStates();
	const { val: files, set: setFiles, ref: refFiles } = Files({ ref: true });
	const { val: lic } = License();

	// TODO: Demo Check

	const setStatus = (file: TraFile, status: Status) => {
		const { id } = file;
		const fiLe: TraFile = { ...file, status };
		setFiles({ ...refFiles.current, [id]: fiLe });
	};

	const split = async () => {
		for (const file of Object.values(files)) {
			setStatus(file, Status.split);

			await sleep(100);

			setStatus(file, Status.done);
		}
	};

	if (lic === Lic.null) return null;
	if (!Object.keys(files).length) return null;

	return (
		<BtnDone {...props} onClick={split}>
			Done
		</BtnDone>
	);
}

export default split;

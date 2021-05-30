import { appInitURL, version } from '@const';
import { ApiRes, AppInitBody, AppInitReturn, IModal, IpcAxiosRes, Level, Lic } from '@types';

import { useAsyncEffect } from './hooks';
import { electron, MachineID } from './native';

import type { AxiosRequestConfig } from 'axios';

export const appInit = async () => {
	const { ipcRenderer } = electron;
	const { machineId } = MachineID;

	const deviceId = await machineId(true);

	const config: AxiosRequestConfig = {
		url: appInitURL,
		method: 'POST',
		data: <AppInitBody>{ deviceId, version },
	};

	const req: IpcAxiosRes = await ipcRenderer.invoke('request', config);

	return req.data as ApiRes<AppInitReturn>;
};

export const appInitHook = ({ setLic, setModal, replace }: appInitHookArgs) =>
	useAsyncEffect(async () => {
		const { shell } = electron;
		const redirectToLicPage = () => replace('/main');

		const { type, data, func } = await appInit();

		if (type === 'error')
			return showErrModal('Unexpected error from API', `${data} | ${func}`);

		if (typeof data === 'string') return; // for type assertion

		const { blocked, isLatest, lic, setupURL } = data;

		if (blocked)
			return showErrModal(
				'Sorry, It looks like you’re blocked.',
				'Contact the creator for assistance.'
			);

		if (lic > 1) setLic(lic);
		else return redirectToLicPage();

		if (!isLatest)
			return setModal({
				show: true,
				loading: false,
				level: Level.info,
				desc: 'Update Available',
				subDesc:
					'Use the button below to download the update, then install it.',
				btn: {
					show: true,
					caption: 'Download',
					callback: () => shell.openExternal(setupURL),
				},
			});

		function showErrModal(desc: string, subDesc: string) {
			setModal({
				show: true,
				loading: false,
				dismiss: false,
				level: Level.error,
				desc,
				subDesc,
			});
		}
	}, []);

interface appInitHookArgs {
	setLic: (data: Lic) => void;
	setModal: (data: IModal) => void;
	replace: (path: string, state?: unknown) => void;
}

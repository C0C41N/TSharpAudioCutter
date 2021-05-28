import { appInitURL, registerLicURL, version } from '@const';
import {
	ApiRes, AppInitBody, AppInitReturn, IModal, IpcAxiosRes, Level, Lic, RegisterLicBody,
	RegisterLicReturn
} from '@types';

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

export const appInitHook = (
	setLic: (data: Lic) => void,
	setModal: (data: IModal) => void
) => {
	useAsyncEffect(async () => {
		const { type, data, func } = await appInit();

		if (type === 'error')
			// uncloseable modal
			return setModal({
				show: true,
				loading: false,
				level: Level.error,
				desc: 'Unexpected error from API',
				subDesc: `${data} | ${func}`,
			});

		if (typeof data === 'string') return; // for type assertion

		const { blocked, isLatest, lic } = data;

		if (blocked)
			// uncloseable modal
			return setModal({
				show: true,
				level: Level.error,
				loading: false,
				desc: 'Sorry, It looks like you’re blocked.',
				subDesc: 'Contact the creator for assistance.',
			});

		setLic(lic);

		if (!isLatest) {
			// TODO: Update
		}
	}, []);
};

export const registerLic = async (key: string) => {
	const { ipcRenderer } = electron;
	const { machineId } = MachineID;

	const deviceId = await machineId(true);

	const config: AxiosRequestConfig = {
		url: registerLicURL,
		method: 'POST',
		data: <RegisterLicBody>{ key, deviceId },
	};

	const req: IpcAxiosRes = await ipcRenderer.invoke('request', config);

	return req.data as ApiRes<RegisterLicReturn>;
};

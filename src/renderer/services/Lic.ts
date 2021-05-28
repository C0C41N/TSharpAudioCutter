import { appInitURL, registerLicURL, version } from '@const';

import { electron, MachineID } from './native';

import type {
	ApiRes,
	AppInitBody,
	AppInitReturn,
	IpcAxiosRes,
	Lic,
	RegisterLicBody,
	RegisterLicReturn,
} from '@types';

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

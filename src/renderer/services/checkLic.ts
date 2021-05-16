import { appInitURL, version } from '@const';

import { electron, MachineID } from './native';

import type { AppInitBody, AppInitReturn, IpcAxiosRes, Lic } from '@types';
import type { AxiosRequestConfig } from 'axios';

export const getCachedLic = () => {
	const val = localStorage.getItem('lic');
	if (val === null) return null;

	const lic: Lic = +val;
	if (lic < 0 || lic > 3) return null;

	return lic;
};

export const setCachedLic = (lic: Lic) =>
	localStorage.setItem('lic', lic.toString());

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

	const { data }: { data: AppInitReturn } = req;

	console.log(data);
};

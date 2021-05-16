import axios from 'axios';

import { appInitURL, version } from '@const';

import { MachineID } from './native';

import type { AppInitBody, Lic } from '@types';
const { machineId } = MachineID;

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
	const deviceId = await machineId(true);

	const res = await axios.post(appInitURL, <AppInitBody>{ deviceId, version });
	console.log(res);
};

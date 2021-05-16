import type { Lic } from '@types';
import axios from 'axios';

import { MachineID } from './native';

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
	// prettier-ignore
	const url = 'https://us-central1-tsharp-audio-cutter.cloudfunctions.net/appInit';
	const deviceId = await machineId(true);
	console.log(deviceId);
	// axios.post(url, { deviceId: '', version: 0 });
};

import { useHistory } from 'react-router-dom';

import { appInitURL, version } from '@const';
import { useStates } from '@services';
import { ApiRes, AppInitBody, AppInitReturn, IpcAxiosRes, Level, SetModal } from '@types';

import { useAsyncEffect } from './hooks';
import { electron, MachineID } from './native';
import { hideLoading, showErrModal, showLoading } from './util';

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

export const appInitHook = () => {
	const { replace } = useHistory();

	const { License, Modal: $Modal } = useStates();
	const { set: setModal } = $Modal({ reactive: false });
	const { set: setLic } = License({ reactive: false });

	const redirectToLicPage = () => replace('/main/license');

	useAsyncEffect(async () => {
		showLoading(setModal);

		const { type, data, func } = await appInit();

		if (type === 'error') return unexpErr(setModal, data, func);

		if (typeof data === 'string') return; // for type assertion

		const { blocked, isLatest, lic, setupURL } = data;

		if (blocked) return blockedErr(setModal);

		if (lic > 1) setLic(lic);
		else redirectToLicPage();

		if (!isLatest) return updateInfo(setModal, setupURL);

		return hideLoading(setModal);
	}, []);
};

// modal wrappers

const unexpErr = (
	setModal: SetModal,
	data: string | AppInitReturn,
	func: string
) => showErrModal(setModal, 'Unexpected error from API', `${data} | ${func}`);

const blockedErr = (setModal: SetModal) =>
	showErrModal(
		setModal,
		'Sorry, It looks like you’re blocked.',
		'Contact the creator for assistance.'
	);

const updateInfo = (setModal: SetModal, setupURL: string) =>
	setModal({
		show: true,
		loading: false,
		level: Level.info,
		desc: 'Update Available',
		subDesc: 'Use the button below to download the update, then install it.',
		btn: {
			show: true,
			caption: 'Download',
			callback: () => electron.shell.openExternal(setupURL),
		},
	});

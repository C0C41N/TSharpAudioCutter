import { useReducer } from 'react';

import { defModal, IModal } from '@comp/modal';

import { svcStore } from './store';

import type { TraFileList } from '@pages/Files';
const { state } = svcStore;

export const useForceUpdate = () => {
	const [_, forceUpdate] = useReducer(x => x + 1, 0);
	return forceUpdate;
}

enum Lic {null, demo, paid, dev}

export const { val: $files, 	set: $setFiles, 	get: $$files 	} = state<TraFileList>();
export const { val: $lic, 		set: $setLic, 		get: $$lic 		} = state<Lic>();
export const { val: $modal,		set: $setModal,		get: $$modal 	} = state<IModal>(defModal);

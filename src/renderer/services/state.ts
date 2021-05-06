import type { TraFileList } from '@pages/Files';

import { useReducer } from 'react';

import { defModal, IModal } from '@comp/modal';
import { svcStore } from '@services/store';

const { state_, state } = svcStore;

export const useForceUpdate = () => {
	const [_, forceUpdate] = useReducer(x => x + 1, 0);
	return forceUpdate;
}

enum Lic {null, demo, paid, dev}

export const { val: $files, 	set: $setFiles, 	get: $$files 	} = state_<TraFileList>();
export const { val: $lic, 		set: $setLic, 		get: $$lic 		} = state_<Lic>();

export const Modal = state<IModal>(defModal);

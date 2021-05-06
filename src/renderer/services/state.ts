import { defModal } from '@const';
import { svcStore } from '@services/store';

import type { IModal, Lic, TraFileList } from '@types';

const { state } = svcStore;

export const Files = state<TraFileList>({});
export const License = state<Lic>(undefined);
export const Modal = state<IModal>(defModal);

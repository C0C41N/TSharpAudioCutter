import { state } from './store';

import type { IModal, Lic, TraFileList } from '@types';

export const Files = state<TraFileList>({});
export const License = state<Lic>(0);
export const Modal = state<IModal>({show: false, loading: false});
export const FromYT = state<boolean>(false);

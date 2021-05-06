import type { TraFileList } from '@pages/Files';

import { defModal, IModal } from '@comp/modal';
import { svcStore } from '@services/store';

const { state } = svcStore;

enum Lic {null, demo, paid, dev}

export const Files = state<TraFileList>({});
export const License = state<Lic>(undefined);
export const Modal = state<IModal>(defModal);

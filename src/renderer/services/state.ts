import type { IModal } from '@comp/modal';
import type { TraFileList } from '@pages/Files';
import { svcStore } from './store';

const { state } = svcStore;

export const { val: $files, set: $setFiles, get: $$files } = state<TraFileList>();

export const { val: $lic, set: $setLic, get: $$lic } = state<Lic>();

export const { set: $setModal, get: $$modal } = state<IModal>();

enum Lic {null, demo, paid, dev}
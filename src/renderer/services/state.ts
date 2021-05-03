import type { TraFileList } from '@pages/Files';
import { svcStore } from './store';

const { state } = svcStore;

export const { val: $files, set: $setFiles, get: $$files } = state<TraFileList>();

export const { val: $lic, set: $setLic, get: $$lic } = state<Lic>();

enum Lic {null, demo, paid, dev}
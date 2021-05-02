import { createContext, useContext } from 'react';

import { svcFF } from './ffmpeg';
import { svcLog } from './log';
import { svcNative } from './native';
import { svcPubSub } from './pubsub';
import { svcSplit } from './split';
import { svcStore } from './store';
import { svcUtil } from './util';

export const services = {
	svcNative,
	svcLog,
	svcFF,
	svcSplit,
	svcPubSub,
	svcStore,
	svcUtil,
};

const context = createContext(services);
export const { Provider } = context;

export const useLog = () => useContext(context).svcLog;
export const useNative = () => useContext(context).svcNative;
export const useFFmpeg = () => useContext(context).svcFF;
export const useSplit = () => useContext(context).svcSplit;
export const useUtil = () => useContext(context).svcUtil;
export const usePubSub = () => useContext(context).svcPubSub;
export const useStore = () => useContext(context).svcStore;

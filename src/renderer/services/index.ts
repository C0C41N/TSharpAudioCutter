import { createContext, useContext } from 'react';

import { svcNative } from './native';
import { svcPubSub } from './pubsub';
import { svcSplit } from './split';
import * as svcState from './state';
import { svcStore } from './store';
import { svcUtil } from './util';

export const services = {
	svcNative,
	svcSplit,
	svcPubSub,
	svcStore,
	svcUtil,
	svcState,
};

const context = createContext(services);
export const { Provider } = context;

export const useNative = () => useContext(context).svcNative;
export const useSplit = () => useContext(context).svcSplit;
export const useUtil = () => useContext(context).svcUtil;
export const usePubSub = () => useContext(context).svcPubSub;
export const useStore = () => useContext(context).svcStore;
export const useStates = () => useContext(context).svcState;

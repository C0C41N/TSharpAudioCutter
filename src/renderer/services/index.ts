import { createContext, useContext } from 'react';

import * as svcState from './state';
import * as svcStore from './store';
import { svcUtil } from './util';

export const services = {
	svcStore,
	svcUtil,
	svcState,
};

const context = createContext(services);
export const { Provider } = context;

export const useUtil = () => useContext(context).svcUtil;
export const useStore = () => useContext(context).svcStore;
export const useStates = () => useContext(context).svcState;

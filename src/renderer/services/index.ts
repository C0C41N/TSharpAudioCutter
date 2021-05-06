import { createContext, useContext } from 'react';

import * as svcState from './state';
import * as svcStore from './store';

export const services = { svcStore, svcState };

const context = createContext(services);
export const { Provider } = context;

export const useStore = () => useContext(context).svcStore;
export const useStates = () => useContext(context).svcState;

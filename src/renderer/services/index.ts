import { createContext, useContext } from 'react';

import { svcComs } from './coms';
import { svcFF } from './ffmpeg';
import { svcLog } from './log';
import { svcNative } from './native';
import { svcSplit } from './split';
import { svcUtil } from './util';

export const services = {
	svcNative,
	svcLog,
	svcFF,
	svcSplit,
	svcComs,
	svcUtil,
};

const context = createContext(services);
export const { Provider } = context;

export const useLog = () => useContext(context).svcLog;
export const useNative = () => useContext(context).svcNative;
export const useFFmpeg = () => useContext(context).svcFF;
export const useSplit = () => useContext(context).svcSplit;
export const useComs = () => useContext(context).svcComs;
export const useUtil = () => useContext(context).svcUtil;

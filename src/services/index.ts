import { createContext, useContext } from 'react';

import { svcFF } from './ffmpeg';
import { svcLog } from './log';
import { svcNative } from './native';

export const services = { svcNative, svcLog, svcFF };

const context = createContext(services);
export const { Provider } = context;

export const useLog = () => useContext(context).svcLog;
export const useNative = () => useContext(context).svcNative;
export const useFFmpeg = () => useContext(context).svcFF;

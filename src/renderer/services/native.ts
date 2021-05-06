import type * as FS from 'fs';
import type * as Path from 'path';
import type * as Electron from 'electron';

export const valid = () => !!(window?.process as any)?.type;

if (!valid()) throw 'src:native:invalid';

export const fs: typeof FS = window.require('fs');
export const path: typeof Path = window.require('path');
export const electron: typeof Electron = window.require('electron');

export const exit = () => {
	const { ipcRenderer } = electron;
	ipcRenderer.send('exit');
};

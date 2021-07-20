import type * as FS from 'fs';
import type * as FSEXTRA from 'fs-extra';
import type * as Path from 'path';
import type * as Electron from 'electron';
import type * as ChildProcess from 'child_process';
import type * as YTDL from 'ytdl-core';
import type * as NMID from 'node-machine-id';

export const valid = () => !!(window?.process as any)?.type;

if (!valid()) throw 'src:native:invalid';

export const fs: typeof FS = window.require('fs');
export const fs_extra: typeof FSEXTRA = window.require('fs-extra');
export const path: typeof Path = window.require('path');
export const electron: typeof Electron = window.require('electron');
export const Ytdl: typeof YTDL = window.require('ytdl-core');
export const MachineID: typeof NMID = window.require('node-machine-id');

const child_process: typeof ChildProcess = window.require('child_process');

export const exit = () => {
	const { ipcRenderer } = electron;
	ipcRenderer.send('exit');
};

export const openFolder = (path: string) =>
	child_process.exec(`start "" "${path}"`);

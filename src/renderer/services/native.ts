import type * as FS from 'fs';
import type * as Path from 'path';
import type * as Electron from 'electron';
import type * as ChildProcess from 'child_process';
import type * as YTDL from 'youtube-mp3-downloader';
import type * as NMID from 'node-machine-id';

export const valid = () => !!(window?.process as any)?.type;

if (!valid()) throw 'src:native:invalid';

export const fs: typeof FS = window.require('fs');
export const path: typeof Path = window.require('path');
export const electron: typeof Electron = window.require('electron');
export const Ytdl: typeof YTDL = window.require('youtube-mp3-downloader');
export const MachineID: typeof NMID = window.require('node-machine-id');

const child_process: typeof ChildProcess = window.require('child_process');

export const exit = () => {
	const { ipcRenderer } = electron;
	ipcRenderer.send('exit');
};

export const openFolder = (path: string) =>
	child_process.exec(`start "" "${path}"`);

import { app, BrowserWindow } from 'electron';

import { winOptions } from './const';
import { conWin, Init } from './func';

Init();

let win: BrowserWindow = null;

const createWindow = (): BrowserWindow => {
	win = new BrowserWindow(winOptions);
	win.on('closed', () => (win = null));

	conWin(win);
	return win;
};

app.on('ready', () => setTimeout(createWindow, 400));

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (win === null) createWindow();
});

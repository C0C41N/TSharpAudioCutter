import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

import { dev, devURL, fileURL } from './const';

export const Init = () => {
	ipcMain.on('docs', e => e.reply('docs', app.getPath('documents')));
};

export const conWin = (e: BrowserWindow) => {
	e.removeMenu();
	ipcMain.on('exit', () => e.close());

	const url = dev ? devURL : fileURL;

	e.loadURL(url);

	if (dev) {
		globalShortcut.register('CommandOrControl+R', () => e.reload());
		globalShortcut.register('CommandOrControl+Shift+J', () =>
			e.webContents.toggleDevTools()
		);
	}
};

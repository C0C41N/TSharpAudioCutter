import axios from 'axios';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

import { dev, devURL, fileURL } from './const';

export const Init = () => {
	ipcMain.on('docs', e => e.reply('docs', app.getPath('documents')));

	ipcMain.handle('request', async (_, config) => {
		const { data, status } = await axios(config);
		return { data, status };
	});
};

export const conWin = (e: BrowserWindow) => {
	e.removeMenu();
	ipcMain.on('exit', () => e.close());

	const url = dev ? devURL : fileURL;

	e.loadURL(url);

	if (dev) {
		globalShortcut.register('CommandOrControl+R', () => e.reload());
		globalShortcut.register('CommandOrControl+Shift+R', () => e.loadURL(url));
		globalShortcut.register('CommandOrControl+Shift+J', () =>
			e.webContents.toggleDevTools()
		);
	}
};

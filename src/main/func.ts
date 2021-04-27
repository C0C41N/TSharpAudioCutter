import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

export const Init = () => {
	ipcMain.on('docs', e => e.reply('docs', app.getPath('documents')));
};

export const conWin = (e: BrowserWindow, dev: boolean) => {
	e.removeMenu();
	ipcMain.on('exit', () => e.close());

	if (dev) {
		const shortcuts = [
			{ k: 'CommandOrControl+R', f: e.reload },
			{ k: 'CommandOrControl+Shift+J', f: e.webContents.openDevTools },
		];

		shortcuts.forEach(({ k, f }) => globalShortcut.register(k, () => f()));
	}
};

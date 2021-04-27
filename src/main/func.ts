import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

export const Init = () => {
	ipcMain.on('docs', e => e.reply('docs', app.getPath('documents')));
};

export const conWin = (e: BrowserWindow, dev: boolean) => {
	e.removeMenu();
	ipcMain.on('exit', () => e.close());

	if (dev) {
		globalShortcut.register('CommandOrControl+R', () => e.reload());
		globalShortcut.register('CommandOrControl+Shift+J', () =>
			e.webContents.toggleDevTools()
		);
	}
};

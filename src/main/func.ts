import { app, BrowserWindow, ipcMain } from 'electron';

export const Init = () => {
	ipcMain.on('docs', e => e.reply('docs', app.getPath('documents')));
};

export const conWin = (e: BrowserWindow) => {
	e.removeMenu();
};

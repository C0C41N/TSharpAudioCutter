import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { format } from 'url';

import { conWin, Init } from './func';

Init();

let win: BrowserWindow = null;
const args = process.argv.slice(1),
	serve = args.some(val => val === '--serve');

app.on('ready', () => setTimeout(createWindow, 400));

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

const createWindow = (): BrowserWindow => {
	win = new BrowserWindow({
		center: true,
		width: 1160,
		height: 764,
		frame: false,
		transparent: true,
		backgroundColor: '#00000000',
		webPreferences: {
			nodeIntegration: true,
			allowRunningInsecureContent: serve ? true : false,
			contextIsolation: false,
		},
	});

	conWin(win);

	const url = serve
		? 'http://localhost:8080'
		: format({
				pathname: join(__dirname, './build/index.html'),
				protocol: 'file:',
				slashes: true,
		  });

	win.loadURL(url);

	// if (serve) win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});

	return win;
};

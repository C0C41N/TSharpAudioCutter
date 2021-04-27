import { BrowserWindowConstructorOptions } from 'electron';
import { join } from 'path';
import { format } from 'url';

export const dev = process.argv.slice(1).some(val => val === '--serve');
export const devURL = 'http://localhost:8080';
export const fileURL = format({
	pathname: join(__dirname, './build/index.html'),
	protocol: 'file:',
	slashes: true,
});

export const winOptions: BrowserWindowConstructorOptions = {
	center: true,
	width: 1160,
	height: 760 + 4,
	frame: false,
	transparent: true,
	backgroundColor: '#00000000',
	maximizable: false,
	resizable: false,
	webPreferences: {
		nodeIntegration: true,
		allowRunningInsecureContent: dev ? true : false,
		contextIsolation: false,
	},
};

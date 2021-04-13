import type * as fs from 'fs';
import type * as path from 'path';
import type * as electron from 'electron';

class Native {
	public fs!: typeof fs;
	public path!: typeof path;
	public electron!: typeof electron;

	public valid = () => !!(window?.process as any)?.type;

	constructor() {
		if (!this.valid()) throw 'SVC:Native:VALID';

		this.fs = window.require('fs');
		this.electron = window.require('electron');
		this.path = window.require('path');
	}

	public exit = () => {
		const { ipcRenderer } = this.electron;
		ipcRenderer.send('exit');
	};
}

export const svcNative = new Native();

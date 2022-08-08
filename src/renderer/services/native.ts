import type * as FS from 'fs'
import type * as Path from 'path'
import type * as Electron from 'electron'
import type * as ChildProcess from 'child_process'
import type * as YTDL from 'ytdl-core'
import type * as NMID from 'node-machine-id'
import type * as Process from 'process'

export const valid = () => !!(window?.process as any)?.type

if (!valid()) throw 'src:native:invalid'

export const fs: typeof FS = window.require('fs')
export const path: typeof Path = window.require('path')
export const electron: typeof Electron = window.require('electron')
export const Ytdl: typeof YTDL = window.require('ytdl-core')
export const MachineID: typeof NMID = window.require('node-machine-id')

const child_process: typeof ChildProcess = window.require('child_process')
const process: typeof Process = window.require('process')

export const exit = () => {
	const { ipcRenderer } = electron
	ipcRenderer.send('exit')
}

export const openFolder = async (
	path: string,
	makeIfNoExist: boolean = false
) => {
	if (makeIfNoExist) {
		const { existsSync, mkdirSync } = fs
		!existsSync(path) && mkdirSync(path)
	}

	const platform = process.platform
	const cmd =
		platform === 'darwin'
			? 'open'
			: platform === 'win32'
			? 'explore'
			: 'xdg-open'

	child_process.execSync(`${cmd} "${path}"`)
}

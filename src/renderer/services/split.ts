import type { Observable } from 'rxjs'
import { takeWhile } from 'rxjs/operators'

import { ffmpeg } from './ffmpeg'
import { electron, fs, path } from './native'
import { pubsub } from './pubsub'
import { getDurRaw, randomKey36 } from './util'

const { existsSync, mkdirSync } = fs
const { basename, extname } = path
const { ipcRenderer } = electron

const { pub: setDocsPath, once: docsPath } = pubsub<string>()

ipcRenderer.on('docs', (_, docs) => {
	const dir = `${docs}/TSharp_split`
	!existsSync(dir) && mkdirSync(dir)
	setDocsPath(dir)
})

ipcRenderer.send('docs')

const filename = async (file: string, type: 10 | 58) => {
	const { ceil } = Math

	const p: any = ['en-US', { minimumIntegerDigits: 2, useGrouping: false }]

	const key = randomKey36(2)

	const ext = type === 10 ? '.wav' : '.ogg'
	const last = ceil((await getDurRaw(file)) % type).toLocaleString(...p)
	const bname = basename(file, extname(file))

	const name = `${key}${type}${last}%02d ${bname}${ext}`

	return `${await docsPath}/${name}`
}

export const Short = (file: string): Observable<IReturn> => {
	const { pub, sub } = pubsub<IReturn>()

	;(async () => {
		ffmpeg()
			.on('progress', ({ percent }) => pub({ percent, end: false }))
			.on('end', () => pub({ percent: 100, end: true }))
			.addInput(file)
			.addOutput(await filename(file, 10))
			.addOutputOption('-f', 'segment', '-segment_time', '9.96') // split
			.addOutputOption('-ar', '44100') // resample
			.addOutputOption('-ac', '1') // mono
			.run()
	})()

	return sub.pipe(takeWhile(e => !e.end))
}

export const Long = (file: string): Observable<IReturn> => {
	const { pub, sub } = pubsub<IReturn>()

	;(async () => {
		ffmpeg()
			.on('progress', ({ percent }) => pub({ percent, end: false }))
			.on('end', () => pub({ percent: 100, end: true }))
			.addInput(file)
			.addOutput(await filename(file, 58))
			.addOutputOption('-f', 'segment', '-segment_time', '7.25') // split
			.addOutputOption('-af', 'asetrate=352800') // resample
			.addOutputOption('-ar', '176400') // resample
			.addOutputOption('-q:a', '10') // quality
			.run()
	})()

	return sub.pipe(takeWhile(e => !e.end))
}

export const outPath = docsPath

interface IReturn {
	percent: number
	end: boolean
}

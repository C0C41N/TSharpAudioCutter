import { Subject } from 'rxjs'
import sanitize from 'sanitize-filename'

import { fs, Ytdl } from '@services/native'
import { pubsub } from '@services/pubsub'

import { outPath } from './split'

import type { downloadOptions } from 'ytdl-core'
const { pub: setYtOutPath, once: YtOutPath } = pubsub<string>()

const { existsSync, mkdirSync } = fs

export const checkTmpDir = async () => {
	const TSharp_split = await outPath
	const tmp = `${TSharp_split}/tmp`
	!existsSync(TSharp_split) && mkdirSync(TSharp_split)
	!existsSync(tmp) && mkdirSync(tmp)
	setYtOutPath(tmp)
}

export const download = async (url: string) => {
	const info = await Ytdl.getBasicInfo(url)

	const { title: titleRaw } = info.videoDetails
	const title = sanitize(titleRaw)

	const options: downloadOptions = {
		filter: format => format.container === 'mp4',
		quality: 'highestaudio',
	}

	const stream = Ytdl(url, options)

	await checkTmpDir()
	const path = await ytOutPath
	const file = `${path}\\${title}`

	stream.pipe(fs.createWriteStream(file))

	const progress = new Subject<number>()

	stream.on('progress', (_, downloaded: number, total: number) => {
		const percent = 10 + (downloaded * 90) / total
		progress.next(percent)
	})

	const finished = new Promise<{ path: string; name: string }>(resolve => {
		stream.once('end', () => {
			stream.destroy()
			const path = file.replace('/', '\\')

			progress.next(100)
			progress.complete()

			resolve({ path, name: title })
		})
	})

	return { progress, finished }
}

checkTmpDir()

export const ytOutPath = YtOutPath

import type { Observable } from 'rxjs';
import { ffmpeg } from './ffmpeg';
import { electron, fs, path } from './native';
import { pubsub } from './pubsub';

const { existsSync, mkdirSync } = fs;
const { basename } = path;
const { ipcRenderer } = electron;

const { pub: setDocsPath, once: docsPath } = pubsub<string>();

ipcRenderer.on('docs', (_, docs) => {
	const dir = `${docs}\\TSharp_split`;
	!existsSync(dir) && mkdirSync(dir);
	setDocsPath(dir);
});

ipcRenderer.send('docs');

const dur = async (file: string): Promise<number> => {
	const { pub, once } = pubsub<number>();

	ffmpeg.ffprobe(file, (err, { format }) => pub(format.duration || 0));
	return once;
};

const filename = async (file: string, type: 10 | 58) => {
	const { ceil } = Math;

	const ext = type === 10 ? '.wav' : '.ogg';
	const last = ceil((await dur(file)) % type);
	const name = `${basename(file, '.mp3')}_${type}_${last}_%02d${ext}`;

	return `${await docsPath}\\${name}`;
};

export const Short = (file: string): Observable<IReturn> => {
	const { pub, sub } = pubsub<IReturn>();

	(async () => {
		ffmpeg()
			.on('progress', ({ percent }) => pub({ percent, end: false }))
			.on('end', () => pub({ percent: 100, end: true }))
			.addInput(file)
			.addOutput(await filename(file, 10))
			.addOutputOption('-f', 'segment', '-segment_time', '9.96') // split
			.addOutputOption('-ar', '44100') // resample
			.addOutputOption('-ac', '1') // mono
			.run();
	})();

	return sub;
};

export const Long = (file: string): Observable<IReturn> => {
	const { pub, sub } = pubsub<IReturn>();

	(async () => {
		ffmpeg()
			.on('progress', ({ percent }) => pub({ percent, end: false }))
			.on('end', () => pub({ percent: 100, end: true }))
			.addInput(file)
			.addOutput(await filename(file, 58))
			.addOutputOption('-f', 'segment', '-segment_time', '7.25') // split
			.addOutputOption('-af', 'asetrate=352800') // resample
			.addOutputOption('-ar', '176400') // resample
			.addOutputOption('-q:a', '10') // quality
			.run();
	})();

	return sub;
};

interface IReturn {
	percent: number;
	end: boolean;
}

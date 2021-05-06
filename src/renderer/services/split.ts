import type { Observable } from 'rxjs';
import { ffmpeg } from './ffmpeg';
import { electron, fs, path } from './native';
import { once, pub, sub } from './pubsub';
import { svcUtil } from './util';

const { randomKey } = svcUtil;
const { existsSync, mkdirSync } = fs;
const { basename } = path;
const { ipcRenderer } = electron;

ipcRenderer.on('docs', (_, docs) => {
	const dir = `${docs}\\TSharp_split`;
	!existsSync(dir) && mkdirSync(dir);
	pub('ipc:docs', dir);
});

ipcRenderer.send('docs');

const docsPath: Promise<string> = once('ipc:docs');

const filename = async (file: string, type: 10 | 58) => {
	const { ceil } = Math;
	const ext = type === 10 ? '.wav' : '.ogg';
	const last = ceil((await dur(file)) % type);
	const name = `${basename(file, '.mp3')}_${type}_${last}_%02d${ext}`;
	return `${await docsPath}\\${name}`;
};

const dur = async (file: string): Promise<number> => {
	const key = randomKey(6);
	ffmpeg.ffprobe(file, (_, { format }) => pub(key, format.duration));
	return once(key);
};

const FFShort = async (key: string, file: string) => {
	ffmpeg()
		.on('progress', ({ percent }) => pub(key, { percent, end: false }))
		.on('end', () => pub(key, { percent: 100, end: true }))
		.addInput(file)
		.addOutput(await filename(file, 10))
		.addOutputOption('-f', 'segment', '-segment_time', '9.96') // split
		.addOutputOption('-ar', '44100') // resample
		.addOutputOption('-ac', '1') // mono
		.run();
};

const FFLong = async (key: string, file: string) => {
	ffmpeg()
		.on('progress', ({ percent }) => pub(key, { percent, end: false }))
		.on('end', () => pub(key, { percent: 100, end: true }))
		.addInput(file)
		.addOutput(await filename(file, 58))
		.addOutputOption('-f', 'segment', '-segment_time', '7.25') // split
		.addOutputOption('-af', 'asetrate=352800') // resample
		.addOutputOption('-ar', '176400') // resample
		.addOutputOption('-q:a', '10') // quality
		.run();
};

export const Short = (file: string): Observable<IReturn> => {
	const key = randomKey(6);
	FFShort(key, file);
	return sub(key);
};

export const Long = (file: string): Observable<IReturn> => {
	const key = randomKey(6);
	FFLong(key, file);
	return sub(key);
};

interface IReturn {
	percent: number;
	end: boolean;
}

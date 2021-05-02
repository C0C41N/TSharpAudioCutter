import type { Observable } from 'rxjs';
import { svcFF } from './ffmpeg';
import { svcNative } from './native';
import { svcPubSub } from './pubsub';
import { svcUtil } from './util';

const { ffmpeg } = svcFF;
const { once, pub, sub } = svcPubSub;
const { electron, fs, path } = svcNative;
const { randomKey } = svcUtil;
const { existsSync, mkdirSync } = fs;
const { basename } = path;
const { ipcRenderer } = electron;

class Split {
	private path: Promise<string> = once('ipc:docs');

	constructor() {
		// Get path
		ipcRenderer.on('docs', (_, docs) => {
			const dir = `${docs}\\TSharp_split`;
			!existsSync(dir) && mkdirSync(dir);
			pub('ipc:docs', dir);
		});

		ipcRenderer.send('docs');
	}

	private filename = async (file: string, type: 10 | 58) => {
		const { ceil } = Math;
		const ext = type === 10 ? '.wav' : '.ogg';
		const last = ceil((await this.dur(file)) % type);
		const name = `${basename(file, '.mp3')}_${type}_${last}_%02d${ext}`;
		return `${await this.path}\\${name}`;
	};

	private dur = async (file: string): Promise<number> => {
		const key = randomKey(6);
		ffmpeg.ffprobe(file, (_, { format }) => pub(key, format.duration));
		return once(key);
	};

	public Short = (file: string): Observable<IReturn> => {
		const key = randomKey(6);
		this.FFShort(key, file);
		return sub(key);
	};

	public Long = (file: string): Observable<IReturn> => {
		const key = randomKey(6);
		this.FFLong(key, file);
		return sub(key);
	};

	private FFShort = async (key: string, file: string) => {
		ffmpeg()
			.on('progress', ({ percent }) => pub(key, { percent, end: false }))
			.on('end', () => pub(key, { percent: 100, end: true }))
			.addInput(file)
			.addOutput(await this.filename(file, 10))
			.addOutputOption('-f', 'segment', '-segment_time', '9.96') // split
			.addOutputOption('-ar', '44100') // resample
			.addOutputOption('-ac', '1') // mono
			.run();
	};

	private FFLong = async (key: string, file: string) => {
		ffmpeg()
			.on('progress', ({ percent }) => pub(key, { percent, end: false }))
			.on('end', () => pub(key, { percent: 100, end: true }))
			.addInput(file)
			.addOutput(await this.filename(file, 58))
			.addOutputOption('-f', 'segment', '-segment_time', '7.25') // split
			.addOutputOption('-af', 'asetrate=352800') // resample
			.addOutputOption('-ar', '176400') // resample
			.addOutputOption('-q:a', '10') // quality
			.run();
	};
}

export const svcSplit = new Split();

interface IReturn {
	percent: number;
	end: boolean;
}

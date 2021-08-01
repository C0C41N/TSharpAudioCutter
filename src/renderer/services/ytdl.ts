import filenamify from 'filenamify';
import { Observable } from 'rxjs';

import { fs, Ytdl } from '@services/native';
import { pubsub } from '@services/pubsub';

import { outPath } from './split';

const { pub: setYtOutPath, once: YtOutPath } = pubsub<string>();

const { existsSync, mkdirSync } = fs;

export const checkTmpDir = async () => {
	const TSharp_split = await outPath;
	const tmp = `${TSharp_split}\\tmp`;
	!existsSync(TSharp_split) && mkdirSync(TSharp_split);
	!existsSync(tmp) && mkdirSync(tmp);
	setYtOutPath(tmp);
};

export const download = async (url: string) => {
	const info = Ytdl.getBasicInfo(url);
	const { title: titleRaw } = (await info).videoDetails;
	const title = filenamify(titleRaw, { replacement: '' });

	const stream = Ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });

	await checkTmpDir();
	const path = await ytOutPath;
	const file = `${path}\\${title}`;

	stream.pipe(fs.createWriteStream(file));

	const progress = new Observable<number>(sub => {
		stream.on('progress', (_, downloaded: number, total: number) => {
			const percent = (downloaded * 100) / total;
			sub.next(percent);
			if (percent === 100) sub.complete();
		});
	});

	const finished = new Promise<{ path: string; name: string }>(resolve => {
		stream.once('end', () => {
			stream.destroy();
			resolve({
				path: file.replace('/', '\\'),
				name: title,
			});
		});
	});

	return { progress, finished };
};

checkTmpDir();

export const ytOutPath = YtOutPath;

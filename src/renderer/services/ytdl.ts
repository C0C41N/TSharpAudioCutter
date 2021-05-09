import { pathFFmpeg } from '@services/ffmpeg';
import { fs, Ytdl } from '@services/native';
import { pubsub } from '@services/pubsub';
import { outPath } from '@services/split';

const { pub: setYtOutPath, once: YtOutPath } = pubsub<string>();
const { pub: setYtdl, once: YTDL } = pubsub<YoutubeMp3Downloader>();

const { existsSync, mkdirSync } = fs;

(async () => {
	const OutPath = `${await outPath}\\mp3_cache`;
	!existsSync(OutPath) && mkdirSync(OutPath);
	setYtOutPath(OutPath);

	setYtdl(
		new Ytdl({
			ffmpegPath: pathFFmpeg,
			outputPath: OutPath,
			queueParallelism: 1,
			progressTimeout: 300,
			allowWebm: false,
		})
	);
})();

export const getFilePath = async (data: { file: string }) => ({
	path: data.file.replace('/', '\\'),
	name: data.file.replace(`${await YtOutPath}/`, ''),
});

export const ytOutPath = YtOutPath;
export const ytdl = YTDL;

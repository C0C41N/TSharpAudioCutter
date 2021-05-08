import YTDL from 'youtube-mp3-downloader';

import { pathFFmpeg } from './ffmpeg';
import { outPath } from './split';

export const ytOutPath = `${await outPath}\\mp3_cache`;

export const ytdl = new YTDL({
	ffmpegPath: pathFFmpeg,
	outputPath: ytOutPath,
	queueParallelism: 1,
	progressTimeout: 300,
	allowWebm: false,
});

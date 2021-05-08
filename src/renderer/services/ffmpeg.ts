import type * as FFmpeg from 'fluent-ffmpeg';
import type * as ffmpegStatic from 'ffmpeg-static';
import type * as ffprobeStatic from 'ffprobe-static';
import { valid } from './native';

if (!valid()) throw 'src:native:invalid';

export const ffmpeg: typeof FFmpeg = window.require('fluent-ffmpeg');

const $ffmpeg: typeof ffmpegStatic = window
	.require('ffmpeg-static')
	.replace('app.asar', 'app.asar.unpacked');

const $probe: typeof ffprobeStatic = window.require('ffprobe-static');

export const pathFFmpeg = $ffmpeg;
export const pathProbe = $probe.path
	.replace('app.asar', 'app.asar.unpacked')
	.replace('x64', 'ia32');

ffmpeg.setFfmpegPath(pathFFmpeg);
ffmpeg.setFfprobePath(pathProbe);

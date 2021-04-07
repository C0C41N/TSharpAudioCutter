import type * as ffmpeg from 'fluent-ffmpeg';
import type * as ffmpegStatic from 'ffmpeg-static';
import type * as ffprobeStatic from 'ffprobe-static';
import { svcLog } from './log';
import { svcNative } from './native';

class FFMPEG {
  public ffmpeg!: typeof ffmpeg;
  public path!: typeof ffmpegStatic;
  public probePath!: typeof ffprobeStatic;

  constructor() {
    const { valid } = svcNative;
    const { log, cls } = svcLog;

    if (!valid) return;

    this.ffmpeg = window.require('fluent-ffmpeg');
    this.path = window.require('ffmpeg-static');
    this.probePath = window.require('ffprobe-static');

    const path = this.path.replace('app.asar', 'app.asar.unpacked');
    const probe = this.probePath.path.replace('app.asar', 'app.asar.unpacked');

    this.ffmpeg.setFfmpegPath(path);
    this.ffmpeg.setFfprobePath(probe);

    cls();

    log({ path });

    this.ffmpeg()
      .setFfmpegPath(
        'C:\\__Sandbox\\TSharp\\TSharpAudioCutter\\node_modules\\ffmpeg-static\\ffmpeg.exe',
      )
      .getAvailableCodecs((err, codecs) => {
        log({ err, codecs });
      });
  }
}

export const svcFF = new FFMPEG();

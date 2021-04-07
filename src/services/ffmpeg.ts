import type * as ffmpeg from 'fluent-ffmpeg';
import type * as ffmpegStatic from 'ffmpeg-static';
import { svcLog } from './log';
import { svcNative } from './native';

class FFMPEG {
  public ffmpeg!: typeof ffmpeg;
  private path!: typeof ffmpegStatic;

  constructor() {
    const { valid } = svcNative;

    if (!valid) return;

    this.ffmpeg = window.require('fluent-ffmpeg');
    this.path = window.require('ffmpeg-static');

    const path = this.path.replace('app.asar', 'app.asar.unpacked');

    this.ffmpeg.setFfmpegPath(path);
  }
}

export const svcFF = new FFMPEG();

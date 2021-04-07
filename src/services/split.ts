import { svcFF } from './ffmpeg';
import { svcLog } from './log';
import { svcNative } from './native';

const { ffmpeg } = svcFF;
const { log } = svcLog;
const { electron } = svcNative;
const { ipcRenderer } = electron;

class Split {
  private out: string = '#NA';

  public Short = (file: string) => {
    log(this.out);
    // if (this.out === '#NA') return;

    // ffmpeg()
    //   .addInput(file)
    //   .on('progress', (data) => log({ data }))
    //   .on('end', () => log('END'))
    //   .on('error', (error) => log({ error }))
    //   .addOutput(this.out)
    //   .addOutputOption('-f', 'segment', '-segment_time', '9.96') // split
    //   .addOutputOption('-ar', '44100') // resample
    //   .addOutputOption('-ac', '1') // mono
    //   .run();
  };

  public Long = (file: string) => {
    if (this.out === '#NA') return;

    ffmpeg()
      .addInput(file)
      .on('start', (ffmpegCommand) => log({ ffmpegCommand }))
      .on('progress', (data) => log({ data }))
      .on('end', () => log('END'))
      .on('error', (error) => log({ error }))
      .addOutput(this.out)
      .addOutputOption('-f', 'segment', '-segment_time', '7.25') // split
      .addOutputOption('-af', 'asetrate=352800') // resample
      .addOutputOption('-ar', '176400') // resample
      .addOutputOption('-q:a', '10') // resample
      .run();
  };

  constructor() {
    ipcRenderer.on('docs', (_, docs) => (this.out = docs));
    ipcRenderer.send('docs');
  }
}

export const svcSplit = new Split();

import './App.css';

import React, { useEffect, useState } from 'react';

import { useFFmpeg, useLog, useNative } from './services';

const logo = './assets/logo.svg';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);
  const { fs } = useNative();
  const { log, cls } = useLog();
  const { ffmpeg, path, probePath } = useFFmpeg();

  useEffect(() => {
    const file = 'C:\\__Sandbox\\audio.mp3';

    // ffmpeg()
    //   .addInput(file)
    //   // .on('start', function (ffmpegCommand) {
    //   //   log({ ffmpegCommand });
    //   // })
    //   // .on('progress', function (data) {
    //   //   log({ data });
    //   // })
    //   // .on('end', function () {
    //   //   log('END');
    //   // })
    //   // .on('error', function (error) {
    //   //   log({ error });
    //   // })
    //   .addOutput('out_%03d.mp3')
    //   .addOutputOption('-f', 'segment', '-segment_time', '10')
    //   .addOutputOption('-c copy')
    //   .run();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

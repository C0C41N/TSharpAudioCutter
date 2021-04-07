import './App.css';

import React, { useEffect, useState } from 'react';

import { useFFmpeg, useLog, useNative } from './services';

const logo = './assets/logo.svg';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);
  const { fs } = useNative();
  const { log, cls } = useLog();
  const { ffmpeg } = useFFmpeg();

  useEffect(() => {
    const file = 'C:\\__Sandbox\\audio.mp3';
    const out = 'C:\\__Sandbox\\audio\\out%2d.wav';
    cls();

    ffmpeg()
      .addInput(file)
      .on('start', (ffmpegCommand) => log({ ffmpegCommand }))
      .on('progress', (data) => log({ data }))
      .on('end', () => log('END'))
      .on('error', (error) => log({ error }))
      .addOutput(out)
      .addOutputOption('-f', 'segment', '-segment_time', '10')
      .run();
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

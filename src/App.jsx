import React, { useState } from 'react';
import './App.scss';
import Dock from './components/Dock';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/Note';
import Resume from './components/Resume';
import Spotify from './components/windows/Spotify';
import Cli from './components/windows/Cli';

const App = () => {
  const [windowsstate, setwindowsstate] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false, 
    cli: false,
    
  });

  return (
    <>
      <main>
        <Nav />

        {windowsstate.note && <Note windowName="note"/>}
        {windowsstate.resume && <Resume windowName="resume"/>}
        {windowsstate.github && <Github  windowName="github"/>}
        {windowsstate.spotify && <Spotify windowName="spotify" />}   
        {windowsstate.cli && <Cli  windowName="cli"/>}
               

        <Dock windowsstate={windowsstate} setwindowsstate={setwindowsstate} />
      </main>
    </>
  );
};

export default App;

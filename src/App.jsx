import React from 'react'
import './App.scss'
import Dock from './componant/Dock'
import Nav from './componant/Nav'
import Window from './componant/Window'
import Projects from './componant/windows/Projects'
import TextEditor from './componant/windows/TextEditor'
import Resume from './componant/windows/Resume'
import TerminalCmd from './componant/windows/TerminalCmd'
import Setting from './componant/windows/Setting'
import { useState } from 'react'
import {wallpapers} from './Data/theme.js'


const App = () => {

  const [selectedTheme, setSelectedTheme] = useState('orange');
  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers.wallpaper1);
  const [isWindowOpen, setIsWindowOpen] = useState({
    settings: false,
    terminal: false,
    text_editor: false,
    resume: false,
    calendar: false,
    link: false,
    mail: false,
    projects: false,
    linkedin: false
  });

  // External links mapping
  const externalLinks = {
    calendar: 'https://calendar.google.com/calendar/u/0/r',
    mail: 'mailto:darshanmpatil16012005@gmail.com',
    link: 'https://github.com/D162005',
    linkedin: 'https://www.linkedin.com/in/darshan-patil-92a7012b1/'
  };

  // Handle window open with external link support
  const handleWindowOpen = (windowKey) => {
    // Check if it's an external link
    if (externalLinks[windowKey]) {
      window.open(externalLinks[windowKey], '_blank');
      return;
    }
    
    // For regular windows, open them
    setIsWindowOpen(prev => ({ ...prev, [windowKey]: true }));
  };

  return (
    <div>
      <main >
        <img src={selectedWallpaper} alt="Wallpaper" className='fixed top-0 left-0 w-full h-full object-cover -z-10' />
        <Nav></Nav>
        <Dock selectedTheme={selectedTheme} selectedWallpaper={selectedWallpaper} setIsWindowOpen={handleWindowOpen} />
        {isWindowOpen.projects && <Projects setIsWindowOpen={setIsWindowOpen} />}
        {isWindowOpen.text_editor && <TextEditor setIsWindowOpen={setIsWindowOpen} />}
        {isWindowOpen.resume && <Resume setIsWindowOpen={setIsWindowOpen} />}
        {isWindowOpen.terminal && <TerminalCmd setIsWindowOpen={setIsWindowOpen} />}
        {isWindowOpen.settings && <Setting  setSelectedTheme={setSelectedTheme} setSelectedWallpaper={setSelectedWallpaper} setIsWindowOpen={setIsWindowOpen} />}
      </main>
    </div>
  )
}

export default App

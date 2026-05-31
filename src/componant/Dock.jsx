import React from 'react'
import {orangethemeColors, bluethemeColors} from './../Data/theme.js'

const Dock = ({ selectedTheme, setIsWindowOpen }) => {

  const [hoveredIcon, setHoveredIcon] = React.useState(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const themeColors = selectedTheme === 'orange' ? orangethemeColors : bluethemeColors;

  const icons = [
    { id: "settings", src: themeColors.setting_logo, label: "Settings" },
    { id: "terminal", src: themeColors.terminal_logo, label: "Terminal" },
    { id: "text_editor", src: themeColors.texteditor_logo, label: "Text Editor" },
    { id: "resume", src: themeColors.resume_logo, label: "Resume" },
    { id: "calendar", src: themeColors.calendar_logo, label: "Calendar" },
    { id: "link", src: themeColors.link_logo, label: "Github-Profile-Link" },
    { id: "mail", src: themeColors.mail_logo, label: "Mail" },
    { id: "linkedin", src: themeColors.linkedin_logo, label: "LinkedIn" },
    { id: "projects", src: themeColors.github_logo, label: "Projects" },
  ]

  const HandleMouseEnter = (label) => {
    return () => {
      setHoveredIcon(label)
      // setMousePosition({ x: window.event.clientX, y: window.event.clientY })
    }
  }

  const HandleMouseLeave = () => {
    // Handle mouse leave logic
    setHoveredIcon(null)
  }
  

  return (
    <div >
      {/* <h1 className='h-10'>Dock</h1> */}
        <div className='h-screen w-12 bg-black/70 absolute left-0 dock-bar' onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}>
          {icons.map(icon => (
            <div key={icon.id} onMouseEnter={HandleMouseEnter(icon.label)} onMouseLeave={HandleMouseLeave} onClick={() => setIsWindowOpen(icon.id)} className='h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-white/15'>
              <img src={icon.src} alt={icon.label}  />
            </div>
          ))}
          <div className='h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-white/15 absolute bottom-0'>
          <img src="./menu-logo.svg" alt="Menu" />
        </div>
        </div>

        {hoveredIcon && (
          <div className='absolute left-14 text-white rounded-2xl logo-label z-100000' style={{ top: mousePosition.y + 'px' }}>
            {hoveredIcon}
          </div>
        )}
      
    </div>
    
  )
}

export default Dock

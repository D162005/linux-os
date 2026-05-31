import React from 'react'
import Window from './../Window.jsx'
import './Setting.scss'

const Setting = ({ setSelectedTheme, setSelectedWallpaper, setIsWindowOpen, isActive, onWindowFocus }) => {

  return (
    <Window Window_title={`Setting`}  className="setting-window " setIsWindowOpen={setIsWindowOpen} label="settings" isActive={isActive} onWindowFocus={onWindowFocus}>
        <div className="setting">
            <div className="style-pannel">
                <h3>Style</h3>
                <div className="style-options">
                    <h4>Theme Color</h4>
                    <div className="orange-theme theme-dots" onClick={() => setSelectedTheme('orange')}></div>
                    <div className="blue-theme theme-dots" onClick={() => setSelectedTheme('blue')}></div>
                </div>
                <br />
                <h3>Wallpaper</h3>
                <div className="wallpaper-options">
                    <div className="wallpaper-2 wallpaper" onClick={() => setSelectedWallpaper('/wallpaper2.svg')}><img src='/wallpaper2.svg' alt="Wallpaper 2" /></div>
                    <div className="wallpaper-3 wallpaper" onClick={() => setSelectedWallpaper('/wallpaper3.svg')}><img src='/wallpaper3.svg' alt="Wallpaper 3" /></div>
                    <div className="wallpaper-1 wallpaper" onClick={() => setSelectedWallpaper('/wallpaper1.svg')}><img src='/wallpaper1.svg' alt="Wallpaper 1" /></div>
                </div>
            </div>
        </div>
    </Window>
  )
}

export default Setting

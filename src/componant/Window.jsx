import React from 'react'
import './Window.scss'
import { Rnd } from 'react-rnd'

const Window = ({ children, Window_title, setIsWindowOpen, label }) => {
  return (
    
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 275,
      }}
      dragHandleClassName="window-header"

    >
      <div className="window " >
        <div className="window-header flex items-center justify-between px-4 py-2 ">
          <span className="window-title">{Window_title}</span>
          <div className="window-controls">
              <div className="yellow-control window-control"></div>
              <div className="green-control window-control"></div>
              <div className="red-control window-control" onClick={() => setIsWindowOpen(window => ({ ...window, [label]: false }))}></div>
          </div>
        </div>
        <div className="window-content  ">
          {children}
        </div>
      </div>
    </Rnd>
    
  )
}

export default Window

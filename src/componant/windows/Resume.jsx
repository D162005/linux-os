import React from 'react'
import './Resume.scss'
import Window from './../Window.jsx'
import resumePDF from './../../Data/Darshan Patil Resume.pdf?url'

const Resume = ({setIsWindowOpen}) => {
  return (
    <Window Window_title={`Resume 'Darshan Patil'`}  className="resume-window " setIsWindowOpen={setIsWindowOpen} label="resume">
        <div className="resume-content">
            <iframe src={resumePDF} title="Resume" className="resume-iframe" />
        </div>
    </Window>
  )

}

export default Resume

import React, { useState, useRef, useEffect } from 'react'
import Window from './../Window.jsx'
import './TerminalCmd.scss'

const TerminalCmd = ({setIsWindowOpen}) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    '╔════════════════════════════════════════════════════════╗',
    '║   Welcome to Darshan Patil\'s Portfolio Terminal      ║',
    '║   Type "help" to see all available commands           ║',
    '╚════════════════════════════════════════════════════════╝',
    ''
  ])
  const outputRef = useRef(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (command) => {
    const cmd = command.trim().toLowerCase()
    let response = ''

    if (cmd === 'help') {
  response = `
╔════════════════════════════════════════════════════════╗
║              AVAILABLE COMMANDS                       ║
╚════════════════════════════════════════════════════════╝

  whoami              Show current user
  about               About me & professional summary
  skills              Frontend & backend tech stack
  education           Academic background
  achievements        Competitions & awards
  projects            Portfolio projects showcase
  contact             Get in touch information
  pwd                 Print working directory
  date                Show current date & time
  echo [text]         Echo the provided text
  clear               Clear the terminal
  ls                  List portfolio sections`
}

else if (cmd === 'whoami') {
  response = 'darshan@portfolio:~$ Full Stack Developer | MERN Stack Developer'
}

else if (cmd === 'about') {
  response = `
╔════════════════════════════════════════════════════════╗
║                    ABOUT ME                           ║
╚════════════════════════════════════════════════════════╝

Name: Darshan Patil

Role:
  • Software Engineer
  • Full Stack Developer
  • MERN Stack Developer

Summary:
Computer Science Engineering student passionate about
building scalable web applications, interactive 3D
experiences, and real-time systems.

Specialization:
  • MERN Stack Development
  • REST API Development
  • Real-Time Applications (Socket.IO)
  • 3D Web Development (Three.js)
  • Responsive UI/UX Development

Current Focus:
Building production-ready applications and
contributing to open-source projects.

Motto:
"Transforming ideas into impactful digital experiences."`
}

else if (cmd === 'skills') {
  response = `
╔════════════════════════════════════════════════════════╗
║                    TECH STACK                         ║
╚════════════════════════════════════════════════════════╝

LANGUAGES:
  • JavaScript (ES6+)
  • C
  • C++
  • Python

FRONTEND:
  • React.js
  • Vite
  • Tailwind CSS
  • Bootstrap
  • SCSS
  • Three.js
  • React Three Fiber
  • GSAP

BACKEND:
  • Node.js
  • Express.js
  • REST APIs
  • JWT Authentication
  • Socket.IO
  • Flask

DATABASES:
  • MongoDB
  • MySQL
  • Firebase Firestore

TOOLS:
  • Git & GitHub
  • Postman
  • VS Code
  • Firebase
  • Vercel
  • Render
  • ESLint`
}

else if (cmd === 'education') {
  response = `
╔════════════════════════════════════════════════════════╗
║                  EDUCATION                            ║
╚════════════════════════════════════════════════════════╝

Bachelor of Engineering
Computer Science & Engineering

University:
  Mumbai University

Duration:
  2022 - 2026

Status:
  Final Year Student

Focus Areas:
  • Full Stack Development
  • Data Structures & Algorithms
  • Database Management Systems
  • Software Engineering
  • Computer Networks`
}

else if (cmd === 'achievements') {
  response = `
╔════════════════════════════════════════════════════════╗
║                 ACHIEVEMENTS                          ║
╚════════════════════════════════════════════════════════╝

🏆 1st Place
─────────────────────────────────
Code-O-Logy
Pseudo-Code Competition (CSI)

🏆 3rd Place
─────────────────────────────────
Code-O-Logy
Bug Hunting Competition (CSI)

🚀 Additional Highlights
─────────────────────────────────
• Built multiple production-ready MERN applications
• Developed interactive 3D educational platforms
• Active Open Source Contributor
• Passionate about solving real-world problems`
}

else if (cmd === 'projects') {
  response = `
╔════════════════════════════════════════════════════════╗
║                FEATURED PROJECTS                      ║
╚════════════════════════════════════════════════════════╝

PROJECT 1: College Katta
├─ Stack: MERN, Socket.IO, JWT
├─ Features:
│  • Study Material Management
│  • Admin Approval Workflow
│  • Role Based Access
│  • Real-Time Chat
└─ Status: Production Deployed

PROJECT 2: NetViz3D
├─ Stack: Three.js, R3F, GSAP
├─ Features:
│  • Network Topology Visualization
│  • OSI Layer Simulation
│  • Packet Flow Animation
│  • AI Command Interface
└─ Category: 3D Educational Platform

PROJECT 3: Linux Portfolio
├─ Stack: React, Tailwind, SCSS
├─ Features:
│  • Linux Inspired Interface
│  • Terminal Commands
│  • Desktop Environment UI
│  • Responsive Design
└─ Category: Personal Portfolio

PROJECT 4: JavaScript Mini Projects
├─ Stack: HTML, CSS, JavaScript
├─ Features:
│  • DOM Manipulation
│  • Canvas API
│  • Games & Animations
│  • Interactive Components
└─ Category: Frontend Experiments`
}

else if (cmd === 'contact') {
  response = `
╔════════════════════════════════════════════════════════╗
║               CONTACT INFORMATION                     ║
╚════════════════════════════════════════════════════════╝

📧 Email:
darshanmpatil16012005@gmail.com

💼 LinkedIn:
linkedin.com/in/darshan-patil

🐙 GitHub:
github.com/DarshanPatil

📍 Location:
India

🎓 Status:
Computer Science Engineering Student

Open To:
  • Full Stack Developer Roles
  • MERN Stack Opportunities
  • Software Engineering Internships
  • Open Source Contributions
  • Freelance Projects`
}

else if (cmd === 'pwd') {
  response = '/home/darshan/projects/portfolio'
}

else if (cmd === 'ls') {
  response ='about/  skills/  education/  achievements/  projects/  contact/  resume.pdf'
} else {
      response = `bash: ${cmd}: command not found`
    }

    setHistory([...history, `$ ${command}`, response])
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    }
  }

  return (
    <Window Window_title="Terminal >>darshanpatil:~$" className="terminal-window" setIsWindowOpen={setIsWindowOpen} label="terminal">
      <div className="terminal-content">
        <div className="terminal-output" ref={outputRef}>
          {history.map((line, index) => (
            <div key={index} className="terminal-line">{line}</div>
          ))}
        </div>
        <div className="terminal-input-line">
          <span className="terminal-prompt">$ </span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            placeholder="Type a command..."
          />
        </div>
      </div>
    </Window>
  )
}

export default TerminalCmd

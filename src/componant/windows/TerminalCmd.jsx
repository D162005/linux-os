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
║              AVAILABLE COMMANDS                        ║
╚════════════════════════════════════════════════════════╝

  whoami              Show current user
  about              About me & professional summary
  skills             Frontend & backend tech stack
  experience         Professional experience & roles
  projects           Portfolio projects showcase
  contact            Get in touch information
  pwd                Print working directory
  date               Show current date & time
  echo [text]        Echo the provided text
  clear              Clear the terminal
  ls                 List portfolio sections`
    } else if (cmd === 'whoami') {
      response = 'darshanpatil@portfolio:~$ Senior Full-Stack Engineer'
    } else if (cmd === 'about') {
      response = `
╔════════════════════════════════════════════════════════╗
║                  ABOUT ME                             ║
╚════════════════════════════════════════════════════════╝

Name: Darshan Patil
Role: Senior Full-Stack Engineer
Experience: 4+ Years in Web Development

Specialization:
  • Full-Stack Web Application Development
  • React.js & Next.js Frontend Architecture
  • Node.js & PostgreSQL Backend Systems
  • Cloud Deployment & DevOps (AWS/Docker)

Philosophy:
"Building scalable, performant, and user-centric solutions
that solve real-world problems with clean code practices."`
    } else if (cmd === 'skills') {
      response = `
╔════════════════════════════════════════════════════════╗
║                  TECH STACK                           ║
╚════════════════════════════════════════════════════════╝

FRONTEND:
  • React.js ............................ 100%
  • Next.js ............................. 95%
  • TailwindCSS ......................... 90%
  • Three.js ............................ 70%

BACKEND:
  • Node.js ............................. 90%
  • PostgreSQL .......................... 85%
  • Redis ............................... 75%
  • Docker .............................. 80%

TOOLS & PLATFORMS:
  • AWS (EC2, S3, Lambda)
  • Git & GitHub
  • Figma (UI/UX)
  • Linux/Unix Systems`
    } else if (cmd === 'experience') {
      response = `
╔════════════════════════════════════════════════════════╗
║              PROFESSIONAL EXPERIENCE                  ║
╚════════════════════════════════════════════════════════╝

CURRENT ROLE (2023 - Present)
─────────────────────────────────
TechFlow Systems - Senior Full-Stack Engineer
  
  ✓ Led monolith-to-microservices migration
  ✓ Optimized API performance (40% latency reduction)
  ✓ Mentored 3 junior developers
  ✓ Architected real-time notification system
  ✓ Managed 5+ high-impact projects

PREVIOUS ROLE (2021 - 2023)
─────────────────────────────────
WebDynamos Inc. - Full-Stack Developer

  ✓ Built responsive web applications
  ✓ Implemented RESTful APIs
  ✓ Optimized database queries
  ✓ Collaborated with cross-functional teams`
    } else if (cmd === 'projects') {
      response = `
╔════════════════════════════════════════════════════════╗
║              FEATURED PROJECTS                        ║
╚════════════════════════════════════════════════════════╝

PROJECT 1: E-Commerce Platform
├─ Tech: React, Node.js, PostgreSQL, Stripe
├─ Features: Real-time inventory, payment processing
└─ Impact: 100K+ monthly users

PROJECT 2: Analytics Dashboard
├─ Tech: Next.js, D3.js, Firebase
├─ Features: Real-time data visualization
└─ Impact: 2M+ data points processed daily

PROJECT 3: Social Networking App
├─ Tech: React Native, Node.js, WebSocket
├─ Features: Real-time messaging, notifications
└─ Impact: 50K+ active users

PROJECT 4: AI Content Generator
├─ Tech: Next.js, OpenAI API, TailwindCSS
├─ Features: Intelligent content creation
└─ Impact: 10K+ documents generated`
    } else if (cmd === 'contact') {
      response = `
╔════════════════════════════════════════════════════════╗
║              CONTACT INFORMATION                      ║
╚════════════════════════════════════════════════════════╝

📧 Email: darshan.patil@techmail.com
💼 LinkedIn: linkedin.com/in/darshanpatil
🐙 GitHub: github.com/darshanpatil
🌐 Portfolio: darshanpatil.dev
📱 Phone: +1 (555) 123-4567

Open for opportunities in:
  • Full-Stack Development
  • Technical Mentorship
  • Open Source Contributions
  • Freelance Projects`
    } else if (cmd === 'pwd') {
      response = '/home/darshanpatil/portfolio'
    } else if (cmd === 'date') {
      response = new Date().toString()
    } else if (cmd === 'clear') {
      setHistory([])
      setInput('')
      return
    } else if (cmd === 'ls') {
      response = 'about/  skills/  experience/  projects/  contact/  resume.pdf'
    } else if (cmd.startsWith('echo ')) {
      response = cmd.substring(5)
    } else if (cmd === '') {
      return
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

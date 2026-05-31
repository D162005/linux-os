import React from 'react'
import projects from './../../Data/project_data'
import Window from './../Window.jsx'
import './projects.scss'

const Projects = ({ setIsWindowOpen }) => {
  return (
    <>
        <Window Window_title="Projects" className="projects-window" setIsWindowOpen={setIsWindowOpen} label="projects">
            <div className='projects-container'>
                {projects.map(project => (
                    <div key={project.id} className='project-card'>
                        <img src={project.image} alt={project.title} className='project-image' />
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <div className='project-tech'>
                            {project.tech.map((tech, index) => (
                                <span key={index} className='project-tech-item'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='project-links '>
                            <div className="project-link github-link">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='a-tag-link '>GitHub</a> </div>
                            <div className="project-link live-link">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='a-tag-link'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Window>
    </>
  )
}

export default Projects

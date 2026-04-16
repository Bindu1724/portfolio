import React from 'react';

function ProjectCard({ project, animate }) {
  return (
    <div className={`project-card ${animate ? 'project-card-animate' : ''}`}>
      <div className="project-card-content">
        <div className="project-card-header">
          <h3>{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-card-footer">
        <p className="project-tech"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

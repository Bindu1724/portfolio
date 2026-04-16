import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    axios.get('https://portfolio-2w5o.onrender.com/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let timer;

    const handleTabClick = () => {
      setAnimateCards(true);
      clearTimeout(timer);
      timer = setTimeout(() => setAnimateCards(false), 1200);
    };

    window.addEventListener('projectsTabClicked', handleTabClick);
    return () => {
      window.removeEventListener('projectsTabClicked', handleTabClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <h2>My Projects</h2>
        <p>Browse my recent full-stack work, built with React, Node.js, Express, MongoDB, and responsive UI design.</p>
      </div>

      <div className="project-grid">
        {projects.map((p, index) => (
          <ProjectCard key={p._id} project={p} animate={animateCards} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

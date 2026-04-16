import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaCode, FaPython, FaGitAlt, FaGithub, FaServer} from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiPostman} from 'react-icons/si';

function Skills() {
  const skillsData = {
    TechStack: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      {name:'Python', icon: <FaPython />},
      { name: 'REST APIs', icon: <FaServer /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  };

  return (
    <div className="skills">
      <h2 className="mb-5">My Skills</h2>
      <div className="skills-container">
          <div className="skill-category">
            <div className="skill-icons">
              {skillsData.TechStack.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
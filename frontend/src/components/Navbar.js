import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }

    if (sectionId === 'projects') {
      window.dispatchEvent(new Event('projectsTabClicked'));
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg">
      <div className="container-fluid">
        {/* Logo + Name */}
        <div className="d-flex align-items-center">
          <div className="logo-circle me-2">B</div>
          <span className="navbar-brand mb-0 h1">Bindu</span>
        </div>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className={`nav-link btn-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn-link ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn-link ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                My Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`btn contact-btn ms-3 ${activeTab === 'contact' ? 'active-contact' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

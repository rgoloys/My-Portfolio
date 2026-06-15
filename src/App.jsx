import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaTerminal,
} from 'react-icons/fa';
import './App.css';
import Avatar from './Static/Avatar.png';
import resumePdf from './components/Index/Rolando-GoloyaJr_Resume.pdf';
import { projects, socialLinks, techStack } from './data/portfolioData';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'links', label: 'Links' },
];

const socialIconMap = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  Instagram: <FaInstagram />,
  Facebook: <FaFacebookF />,
};

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-28% 0px -58%', threshold: [0.15, 0.35, 0.6] }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}

function Reveal({ as: Element = 'div', className = '', children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Element ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Element>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(
    () => projects.find((project) => project.featured)?.id || projects[0].id
  );

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === activeProjectId)) {
      setActiveProjectId(filteredProjects[0]?.id || projects[0].id);
    }
  }, [activeFilter, activeProjectId, filteredProjects]);

  const activeProject =
    projects.find((project) => project.id === activeProjectId) || filteredProjects[0] || projects[0];

  const handleProjectMove = (event) => {
    if (event.pointerType !== 'mouse') {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 9;
    const rotateX = ((y / rect.height) - 0.5) * -9;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const resetProjectMove = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <header className="site-header">
        <a className="brand-mark" href="#about" aria-label="Rolando Goloya portfolio home">
          <span>RG</span>
          <small>Command Center</small>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button theme-button"
          type="button"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <main>
        <section id="about" className="hero-section section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" />
              Available for software and web development
            </div>
            <h1>
              Rolando A. Goloya Jr.
              <span>Web Developer</span>
            </h1>
            <p className="hero-lede">
              Dedicated and passionate software engineer building practical web systems, market
              platforms, dashboards, and automation tools that move ideas into real projects.
            </p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="primary-action" href="#projects">
                Explore projects <FaArrowRight />
              </a>
              <a className="secondary-action" href={resumePdf} download="RolandoGoloyaJr_Resume.pdf">
                <FaDownload /> Resume
              </a>
            </div>

          </div>

          <div className="hero-visual" aria-label="Developer command center portrait">
            <div className="avatar-frame">
              <img src={Avatar} alt="Rolando A. Goloya Jr. avatar" />
              <div className="scan-line" />
            </div>
            <div className="status-console">
              <div className="console-topline">
                <FaTerminal />
                rgoloys/status
              </div>
              <div className="console-row">
                <span>profile.sync</span>
                <strong>online</strong>
              </div>
              <div className="console-row">
                <span>repo.scan</span>
                <strong>15 public</strong>
              </div>
              <div className="console-row">
                <span>focus.mode</span>
                <strong>build</strong>
              </div>
            </div>
          </div>
        </section>

        <Reveal as="section" id="skills" className="skills-section section-wrap">
          <div className="section-heading">
            <span>Stack Signal</span>
            <h2>Technologies grouped like a live toolkit.</h2>
          </div>

          <div className="skills-grid">
            {techStack.map((tech, index) => (
              <div className="skill-chip" key={tech.name} style={{ '--delay': `${index * 45}ms` }}>
                <img src={tech.icon} alt="" aria-hidden="true" />
                <span>{tech.name}</span>
                <small>{tech.group}</small>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="projects" className="projects-section section-wrap">
          <div className="section-heading project-heading">
            <span>Project Console</span>
            <h2>Select a repository and inspect the build profile.</h2>
            <p>
              Curated from your current portfolio and public GitHub repositories, including newer
              2026 projects.
            </p>
          </div>

          <div className="filter-bar" aria-label="Project filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeFilter === category ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-console">
            <div className="project-grid" aria-label="Project repository cards">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={`project-card ${activeProjectId === project.id ? 'is-selected' : ''}`}
                  onClick={() => setActiveProjectId(project.id)}
                  onPointerMove={handleProjectMove}
                  onPointerLeave={resetProjectMove}
                  style={{ '--delay': `${index * 70}ms` }}
                >
                  <span className="project-card-glow" />
                  <div className="project-preview">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} preview`} />
                    ) : (
                      <div className="generated-preview">
                        <FaCode />
                        <span>{project.language}</span>
                        <code>{project.id}</code>
                      </div>
                    )}
                  </div>
                  <div className="project-card-body">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <aside className="project-inspector" aria-live="polite">
              <div className="inspector-header">
                <span className="terminal-pill">
                  <FaTerminal /> selected.repo
                </span>
                <strong>{activeProject.updated}</strong>
              </div>

              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>

              <div className="inspector-meta">
                <span>{activeProject.category}</span>
                <span>{activeProject.language}</span>
              </div>

              <div className="tech-icons" aria-label={`${activeProject.title} technologies`}>
                {activeProject.icons.map((icon, index) => (
                  <img key={`${activeProject.id}-${index}`} src={icon} alt="" aria-hidden="true" />
                ))}
              </div>

              <ul className="highlight-list">
                {activeProject.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <a
                className="primary-action inspector-link"
                href={activeProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open repository <FaExternalLinkAlt />
              </a>
            </aside>
          </div>
        </Reveal>
      </main>

      <footer id="links" className="contact-section section-wrap">
        <div>
          <span className="eyebrow">Contact Channel</span>
          <h2>Let us build the next useful thing.</h2>
          <a className="email-link" href="mailto:rgoloyajr@gmail.com">
            <FaEnvelope /> rgoloyajr@gmail.com
          </a>
        </div>

        <div className="social-grid" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {socialIconMap[link.label]}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;

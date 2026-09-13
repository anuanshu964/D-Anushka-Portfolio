import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;

  const handlePlaceholderClick = (e, type, title) => {
    if (type === 'demo' || type === 'github') {
      e.preventDefault();
      alert(`This is a placeholder for "${title}". You can easily add your repository or live link in src/data/portfolioData.js!`);
    }
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            <span>Applied Engineering</span>
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on machine learning architectures, web engineering, and utility systems developed for academic exploration and hackathons.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Project Card Top */}
              <div className="project-card-header">
                <div className="project-type-badge">
                  <Terminal size={13} />
                  <span>{project.type}</span>
                </div>
                <div className="project-status-tag">
                  {project.status}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Feature Highlights */}
              <div className="project-features">
                {project.features.map((feat, i) => (
                  <div key={i} className="project-feature-item">
                    <CheckCircle2 size={13} className="feature-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="project-tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  onClick={(e) => handlePlaceholderClick(e, 'github', project.title)}
                  className="btn btn-secondary btn-sm project-btn"
                  title="View GitHub Repository"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demoUrl}
                  onClick={(e) => handlePlaceholderClick(e, 'demo', project.title)}
                  className="btn btn-primary btn-sm project-btn"
                  title="View Live Demo"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .project-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-md);
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 0.25rem 0.7rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(6, 182, 212, 0.2);
        }

        .project-status-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .project-title {
          font-size: 1.35rem;
          color: var(--text-heading);
          margin-bottom: 0.85rem;
          line-height: 1.3;
        }

        .project-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .project-features {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .project-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .feature-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.75rem;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .project-btn {
          flex: 1;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

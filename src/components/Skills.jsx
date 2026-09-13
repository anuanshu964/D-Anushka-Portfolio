import React, { useState } from 'react';
import { Code2, Cpu, Wrench, Sparkles, Terminal, LayoutGrid, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagicBento from './MagicBento';

export const Skills = () => {
  const { skills } = portfolioData;
  const [viewMode, setViewMode] = useState('bento'); // 'bento' | 'curriculum'
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'core', label: 'Core Competencies', icon: Cpu },
    { id: 'tools', label: 'Tools & Platforms', icon: Wrench }
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Code2 size={14} />
            <span>Core Expertise</span>
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Structured skill architecture focusing on foundational programming, algorithmic depth, and practical developer workflows.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="skills-mode-switch-wrapper">
          <div className="skills-mode-switcher">
            <button
              onClick={() => setViewMode('bento')}
              className={`mode-btn ${viewMode === 'bento' ? 'active' : ''}`}
              title="Interactive GSAP Bento Matrix"
            >
              <LayoutGrid size={15} />
              <span>Interactive Bento Matrix</span>
            </button>
            <button
              onClick={() => setViewMode('curriculum')}
              className={`mode-btn ${viewMode === 'curriculum' ? 'active' : ''}`}
              title="Detailed Coursework & Skills List"
            >
              <Layers size={15} />
              <span>Detailed Curriculum</span>
            </button>
          </div>
        </div>

        {/* Bento Matrix Mode */}
        {viewMode === 'bento' && (
          <div className="bento-container-wrapper">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
            <div className="bento-interaction-indicator">
              <span className="sparkle-icon">✦</span>
              <span>Interactive Bento: Hover cards for 3D tilt, magnetic pull & cosmic stars • Click to trigger ripple shockwave</span>
            </div>
          </div>
        )}

        {/* Detailed Curriculum Mode */}
        {viewMode === 'curriculum' && (
          <>
            {/* Category Filters */}
            <div className="skills-filter-container">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`skills-filter-btn ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Cards Grid */}
            <div className="skills-category-grid">
              {/* Programming Languages */}
              {(activeCategory === 'all' || activeCategory === 'programming') && (
                <div className="glass-card skill-card-category">
                  <div className="category-header">
                    <div className="category-icon-box">
                      <Code2 size={22} />
                    </div>
                    <div>
                      <div className="category-badge">{skills.programming.badge}</div>
                      <h3 className="category-title">{skills.programming.title}</h3>
                    </div>
                  </div>

                  <p className="category-desc">{skills.programming.description}</p>

                  <div className="skills-pills-list">
                    {skills.programming.items.map((item, idx) => (
                      <div key={idx} className="skill-detail-item">
                        <div className="skill-item-top">
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-level-tag">{item.level}</span>
                        </div>
                        <p className="skill-item-desc">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="category-summary-bar">
                    <Terminal size={14} />
                    <span>C • Java • Python</span>
                  </div>
                </div>
              )}

              {/* Core Competencies */}
              {(activeCategory === 'all' || activeCategory === 'core') && (
                <div className="glass-card skill-card-category">
                  <div className="category-header">
                    <div className="category-icon-box" style={{ color: 'var(--accent-purple)' }}>
                      <Cpu size={22} />
                    </div>
                    <div>
                      <div className="category-badge" style={{ color: 'var(--accent-purple)' }}>
                        {skills.core.badge}
                      </div>
                      <h3 className="category-title">{skills.core.title}</h3>
                    </div>
                  </div>

                  <p className="category-desc">{skills.core.description}</p>

                  <div className="skills-pills-list">
                    {skills.core.items.map((item, idx) => (
                      <div key={idx} className="skill-detail-item">
                        <div className="skill-item-top">
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-level-tag">{item.level}</span>
                        </div>
                        <p className="skill-item-desc">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="category-summary-bar">
                    <Terminal size={14} />
                    <span>DS • OOP • DBMS • Analytical Thinking</span>
                  </div>
                </div>
              )}

              {/* Tools & Platforms */}
              {(activeCategory === 'all' || activeCategory === 'tools') && (
                <div className="glass-card skill-card-category">
                  <div className="category-header">
                    <div className="category-icon-box" style={{ color: 'var(--accent-emerald)' }}>
                      <Wrench size={22} />
                    </div>
                    <div>
                      <div className="category-badge" style={{ color: 'var(--accent-emerald)' }}>
                        {skills.tools.badge}
                      </div>
                      <h3 className="category-title">{skills.tools.title}</h3>
                    </div>
                  </div>

                  <p className="category-desc">{skills.tools.description}</p>

                  <div className="skills-pills-list">
                    {skills.tools.items.map((item, idx) => (
                      <div key={idx} className="skill-detail-item">
                        <div className="skill-item-top">
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-level-tag">{item.level}</span>
                        </div>
                        <p className="skill-item-desc">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="category-summary-bar">
                    <Terminal size={14} />
                    <span>VS Code • MS Office • Git</span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .skills-mode-switch-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2.25rem;
        }

        .skills-mode-switcher {
          display: inline-flex;
          background: rgba(14, 19, 38, 0.85);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          gap: 0.35rem;
        }

        .mode-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.35rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .mode-btn:hover {
          color: #ffffff;
        }

        .mode-btn.active {
          background: linear-gradient(135deg, rgba(132, 0, 255, 0.9) 0%, rgba(6, 182, 212, 0.9) 100%);
          color: #ffffff;
          box-shadow: 0 2px 12px rgba(132, 0, 255, 0.4);
        }

        .bento-container-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bento-interaction-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          font-size: 0.8rem;
          font-family: var(--font-mono, monospace);
          color: rgba(255, 255, 255, 0.6);
          background: rgba(132, 0, 255, 0.08);
          border: 1px solid rgba(132, 0, 255, 0.2);
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          text-align: center;
        }

        .bento-interaction-indicator .sparkle-icon {
          color: #a855f7;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .skills-filter-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.75rem;
        }

        .skills-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .skills-filter-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .skills-filter-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);
        }

        .skills-category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .skill-card-category {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-md);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .category-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--gradient-subtle);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .category-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-heading);
        }

        .category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .skills-pills-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 1.75rem;
        }

        .skill-detail-item {
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast), border-color var(--transition-fast);
        }

        .skill-detail-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-hover);
        }

        .skill-item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .skill-level-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .skill-item-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .category-summary-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .skills-category-grid {
            grid-template-columns: 1fr;
          }
          .skill-card-category {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

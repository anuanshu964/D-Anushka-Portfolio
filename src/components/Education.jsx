import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </span>
          <h2 className="section-title">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Consistent academic excellence and structured progression in sciences, mathematics, and artificial intelligence engineering.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="timeline-container">
          {/* Central Connecting Glow Line */}
          <div className="timeline-spine-line" />

          <div className="timeline-list">
            {education.map((item, index) => (
              <div key={index} className="timeline-entry">
                {/* Node indicator */}
                <div className="timeline-node">
                  <div className="timeline-node-inner">
                    <GraduationCap size={16} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-card timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-period-badge">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>

                    <div className="timeline-score-badge">
                      <Award size={13} />
                      <span>{item.score}</span>
                    </div>
                  </div>

                  <h3 className="timeline-degree">{item.degree}</h3>

                  <div className="timeline-institution">
                    <MapPin size={14} />
                    <span>{item.institution}</span>
                  </div>

                  <div className="timeline-status-pill">
                    {item.status}
                  </div>

                  <ul className="timeline-highlights">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={13} className="highlight-bullet" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          padding: 1.5rem 0;
        }

        .timeline-spine-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-blue) 50%, var(--accent-purple) 100%);
          border-radius: var(--radius-full);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.4);
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .timeline-entry {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding-left: 0.5rem;
        }

        .timeline-node {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 16px rgba(6, 182, 212, 0.5);
          transition: transform var(--transition-fast);
        }

        .timeline-entry:hover .timeline-node {
          transform: scale(1.12);
          border-color: var(--accent-purple);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
        }

        .timeline-node-inner {
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-card {
          flex: 1;
          padding: 2rem;
          border-radius: var(--radius-md);
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .timeline-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .timeline-score-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: #ffffff;
          background: var(--gradient-primary);
          padding: 0.25rem 0.85rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 10px rgba(6, 182, 212, 0.35);
        }

        .timeline-degree {
          font-size: 1.25rem;
          color: var(--text-heading);
          margin-bottom: 0.4rem;
        }

        .timeline-institution {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .timeline-status-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.15rem;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .timeline-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .timeline-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .highlight-bullet {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        @media (max-width: 650px) {
          .timeline-spine-line {
            left: 20px;
          }
          .timeline-entry {
            gap: 1.25rem;
          }
          .timeline-node {
            width: 38px;
            height: 38px;
          }
          .timeline-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;

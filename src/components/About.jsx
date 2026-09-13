import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Code2, Brain, Sparkles, Target, Lightbulb, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, stats } = portfolioData;
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [cgpaCount, setCgpaCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate CGPA counter from 0.00 to 8.46
          const target = 8.46;
          const duration = 1500;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCgpaCount(target);
              clearInterval(timer);
            } else {
              setCgpaCount(parseFloat(current.toFixed(2)));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statIcons = {
    Award: <Award size={24} className="stat-icon" />,
    Calendar: <Calendar size={24} className="stat-icon" />,
    Code2: <Code2 size={24} className="stat-icon" />,
    Brain: <Brain size={24} className="stat-icon" />
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Profile Overview</span>
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Specializing in Artificial Intelligence & Machine Learning with a focus on core programming, analytical problem solving, and practical systems.
          </p>
        </div>

        {/* Narrative & Focus Areas */}
        <div className="about-grid">
          {/* Main Story Narrative */}
          <div className="glass-card about-story-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-heading)' }}>
              Engineering Intelligent Systems & Computational Solutions
            </h3>

            <p style={{ marginBottom: '1.25rem', fontSize: '1.02rem', lineHeight: 1.8 }}>
              {personal.aboutBio}
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
              Currently at <strong style={{ color: 'var(--text-primary)' }}>Ramachandra College of Engineering (RCEE), Eluru</strong>, my academic journey is centered around mastering foundational computer science disciplines: rigorous Data Structures, Object-Oriented software engineering in Java, memory-efficient systems in C, and intelligent data modeling in Python.
            </p>

            {/* Key Focus Pillars */}
            <div className="focus-pillars">
              <div className="pillar-item">
                <Target size={18} className="pillar-icon" />
                <div>
                  <h4>Problem Solving</h4>
                  <p>Algorithmic logic, structure optimization, and clean coding practices.</p>
                </div>
              </div>

              <div className="pillar-item">
                <Brain size={18} className="pillar-icon" />
                <div>
                  <h4>AI & Machine Learning</h4>
                  <p>Exploring predictive algorithms, pattern identification, and intelligent models.</p>
                </div>
              </div>

              <div className="pillar-item">
                <Lightbulb size={18} className="pillar-icon" />
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Constantly picking up modern tools, participating in hackathons, and building projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics / Statistics Cards */}
          <div className="stats-column">
            {stats.map((stat, idx) => {
              const displayValue = stat.label === 'CGPA' 
                ? (hasAnimated ? cgpaCount.toFixed(2) : '0.00') 
                : stat.value;

              return (
                <div key={idx} className="glass-card stat-card">
                  <div className="stat-header">
                    <div className="stat-icon-wrapper">
                      {statIcons[stat.icon]}
                    </div>
                    <span className="stat-detail-tag">{stat.detail}</span>
                  </div>

                  <div className="stat-number gradient-text">
                    {displayValue}
                  </div>

                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.95fr;
          gap: 2rem;
          align-items: stretch;
        }

        .about-story-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .focus-pillars {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.15rem;
          margin-top: 2rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .pillar-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .pillar-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .pillar-item h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-heading);
          margin-bottom: 0.2rem;
        }

        .pillar-item p {
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .stats-column {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-md);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .stat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--gradient-subtle);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .stat-detail-tag {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .stats-column {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .stats-column {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

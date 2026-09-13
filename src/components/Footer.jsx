import React from 'react';
import { Mail, Linkedin, Github, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '4rem 0 2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-primary)',
                  color: '#ffffff'
                }}
              >
                <Sparkles size={16} />
              </span>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)' }}>
                {personal.name}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.6 }}>
              {personal.degree} at {personal.college}.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">Navigation</span>
            <div className="footer-links-grid">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Col */}
          <div className="footer-connect-col">
            <span className="footer-col-title">Connect</span>
            <div className="footer-social-row">
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                title="Email D. Anushka"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="footer-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom copyright and attribution */}
        <div className="footer-bottom">
          <p>© 2026 {personal.name}. All Rights Reserved.</p>
          <p className="footer-tagline">
            Built with passion for AI, technology & innovation.
          </p>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-col-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem 1.5rem;
        }

        .footer-nav-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-nav-link:hover {
          color: var(--accent-cyan);
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .footer-social-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .footer-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .footer-top-btn:hover {
          color: var(--accent-cyan);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-tagline {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

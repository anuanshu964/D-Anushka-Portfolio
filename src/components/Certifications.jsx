import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} />
            <span>Verified Credentials</span>
          </span>
          <h2 className="section-title">
            Industry <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal programming certifications demonstrating verified competencies in procedural C and object-oriented Java.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div className="cert-card-top">
                <div className="cert-icon-container">
                  <Award size={26} className="cert-main-icon" />
                </div>
                <div className="cert-badge">
                  <ShieldCheck size={13} />
                  <span>{cert.issuerBadge}</span>
                </div>
              </div>

              <div className="cert-content">
                <div className="cert-issuer">Issued by {cert.issuer}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>

                {/* Topics / Competencies */}
                <div className="cert-topics-wrapper">
                  {cert.topics.map((topic, i) => (
                    <span key={i} className="cert-topic-tag">
                      <CheckCircle2 size={12} />
                      <span>{topic}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="cert-footer">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn btn-secondary btn-sm cert-action-btn"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

      {/* Embedded Component CSS */}
      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .cert-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-md);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .cert-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-lg), 0 0 25px rgba(6, 182, 212, 0.2);
        }

        .cert-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cert-icon-container {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--gradient-subtle);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(6, 182, 212, 0.2);
        }

        .cert-issuer {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
        }

        .cert-title {
          font-size: 1.35rem;
          color: var(--text-heading);
          margin-bottom: 0.75rem;
        }

        .cert-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .cert-topics-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .cert-topic-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .cert-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .cert-action-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
          .cert-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { Download, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeCTA = () => {
  const { personal } = portfolioData;

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="glass-card resume-cta-card">
          {/* Ambient background decoration */}
          <div className="resume-glow-bg" />

          <div className="resume-cta-content">
            <span className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <FileText size={14} />
              <span>Curriculum Vitae</span>
            </span>

            <h2 className="resume-cta-title">
              Want to know more about me?
            </h2>

            <p className="resume-cta-text">
              Download my resume to explore my education, skills, certifications, and experience in detail.
            </p>

            <div className="resume-cta-highlights">
              <div className="resume-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>CGPA 8.46 (AI & ML Specialization)</span>
              </div>
              <div className="resume-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Simplilearn C & Scaler Java Certified</span>
              </div>
              <div className="resume-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Algorithms & Systems Engineering</span>
              </div>
            </div>

            <div className="resume-btn-wrapper">
              <a
                href={personal.resumePath}
                download="D_Anushka_Resume.pdf"
                className="btn btn-primary resume-main-btn"
              >
                <Download size={20} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .resume-cta-card {
          padding: 4rem 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(56, 189, 248, 0.3);
          background: radial-gradient(circle at top right, rgba(14, 23, 50, 0.9) 0%, rgba(8, 10, 22, 0.95) 100%);
          text-align: center;
          position: relative;
          box-shadow: var(--shadow-lg), 0 0 35px rgba(6, 182, 212, 0.15);
        }

        .resume-glow-bg {
          position: absolute;
          top: -50%;
          left: 30%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.1) 60%, transparent 80%);
          filter: blur(80px);
          pointer-events: none;
        }

        .resume-cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }

        .resume-cta-title {
          font-size: clamp(2rem, 3.8vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .resume-cta-text {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .resume-cta-highlights {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .resume-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #f1f5f9;
        }

        .text-cyan {
          color: var(--accent-cyan);
        }

        .resume-main-btn {
          padding: 1.1rem 2.5rem;
          font-size: 1.05rem;
        }

        @media (max-width: 640px) {
          .resume-cta-card {
            padding: 2.75rem 1.5rem;
          }
          .resume-cta-highlights {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          .resume-main-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ResumeCTA;

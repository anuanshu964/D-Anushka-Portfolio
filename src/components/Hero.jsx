import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Sparkles, 
  Brain, 
  Code2, 
  Cpu, 
  Database,
  ChevronDown 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import NeuralCanvas from './NeuralCanvas';
import ParticleText from './ParticleText';
import Lanyard from './Lanyard';
import Lightning from './Lightning';
import cardFront from '../assets/lanyard/card_front.jpg';
import cardFrontDragged from '../assets/lanyard/card_front_dragged.jpg';
import cardBack from '../assets/lanyard/card_back.jpg';
import userPhoto from '../assets/lanyard/user_photo.jpg';

export const Hero = () => {
  const { personal } = portfolioData;
  const [isDragging, setIsDragging] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Electric Lightning Background */}
      <div
        className="hero-lightning-layer"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.38,
          overflow: 'hidden'
        }}
      >
        <Lightning
          hue={195}
          xOffset={0.28}
          speed={0.7}
          intensity={1.1}
          size={1.1}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--accent-cyan)',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                boxShadow: '0 0 16px rgba(6, 182, 212, 0.15)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 8px var(--accent-emerald)',
                  display: 'inline-block'
                }}
              />
              <span>{personal.availability}</span>
            </div>

            {/* Main Greeting with Interactive ParticleText Name Title */}
            <div style={{ width: '100%', marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontSize: 'clamp(1.2rem, 2.4vw, 1.55rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Hi, I'm</span>
                <span className="wave-hand">👋</span>
              </div>

              <h1
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit'
                }}
              >
                <div
                  className="hero-particle-name-box"
                  style={{
                    width: '100%',
                    height: '150px',
                    position: 'relative',
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                    overflow: 'visible'
                  }}
                >
                  <ParticleText
                    text={personal.name}
                    particleSize={2.2}
                    density={3.5}
                    color="#ffffff"
                    highlightColor="#38bdf8"
                    scatter={180}
                    gatherDuration={1600}
                    stagger={420}
                    pointerRepel={40}
                    repelRadius={120}
                    idleDrift={0.7}
                    trigger="hover"
                    fontSize="clamp(2.5rem, 5.5vw, 4rem)"
                    fontWeight={800}
                    fontFamily="inherit"
                    glow={true}
                    style={{ minHeight: '150px', height: '100%' }}
                  />
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                fontWeight: 500,
                color: 'var(--accent-cyan)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em'
              }}
            >
              {personal.subtitle}
            </h2>

            {/* Short Bio */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '580px',
                marginBottom: '2rem'
              }}
            >
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="btn btn-primary"
              >
                <span>Explore My Portfolio</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personal.resumePath}
                download="D_Anushka_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, 'skills')}
                className="btn btn-outline"
              >
                <Sparkles size={16} />
                <span>View My Skills</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn btn-secondary"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social / Contact Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={`mailto:${personal.email}`}
                  title="Email D. Anushka"
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn: D. Anushka"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Physics Lanyard ID Badge */}
          <div className="hero-visual lanyard-stage">
            {/* Compact Drag Instruction positioned naturally above the hanging lanyard */}
            <div className="lanyard-instruction-tag">
              <span>{isDragging ? '⚡ DRAGGING ID — PHOTO UNLOCKED' : '🖱️ Click & Drag to Swing'}</span>
            </div>

            {/* Direct 3D Lanyard Canvas - NO OUTER BOX, NO FRAME */}
            <div className="lanyard-direct-area">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                fov={20}
                transparent={true}
                frontImage={cardFront}
                draggedFrontImage={cardFrontDragged}
                backImage={cardBack}
                imageFit="cover"
                lanyardWidth={1.2}
                cardScale={2.85}
                onDragChange={setIsDragging}
              />

              {/* Holographic Photo HUD that appears when ID is dragged */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '0.8rem',
                  zIndex: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 10, 25, 0.94)',
                  border: '1px solid var(--accent-cyan)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 0 25px rgba(6, 182, 212, 0.45), inset 0 0 15px rgba(6, 182, 212, 0.2)',
                  pointerEvents: 'none',
                  transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isDragging ? 1 : 0,
                  transform: isDragging ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(8px)'
                }}
              >
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: '0 0 12px rgba(6, 182, 212, 0.5)'
                  }}
                >
                  <img
                    src={userPhoto}
                    alt="D. Anushka"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff', display: 'block', letterSpacing: '0.04em' }}>
                    D. ANUSHKA
                  </span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    ● IDENTITY ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            aria-label="Scroll down to About section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              animation: 'float 2.5s ease-in-out infinite'
            }}
          >
            <span>Explore</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20%, 60% { transform: rotate(14deg); }
          40%, 80% { transform: rotate(-14deg); }
        }

        .wave-hand {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave 2.5s infinite;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
          box-shadow: 0 4px 14px rgba(6, 182, 212, 0.25);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .neural-core-card {
          width: 100%;
          max-width: 460px;
          height: 440px;
          position: relative;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(56, 189, 248, 0.2);
          background: radial-gradient(circle at center, rgba(14, 23, 50, 0.75) 0%, rgba(7, 9, 19, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(6, 182, 212, 0.2);
        }

        .core-hologram {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        .core-pulse-circle {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 1px dashed rgba(6, 182, 212, 0.4);
          animation: spinSlow 20s linear infinite;
        }

        .core-inner-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.5);
          position: relative;
          z-index: 2;
        }

        .brain-icon {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .core-label {
          margin-top: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .core-label span {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-cyan);
        }

        .core-label small {
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.95rem;
          border-radius: var(--radius-full);
          background: rgba(10, 15, 30, 0.92);
          border: 1px solid rgba(56, 189, 248, 0.35);
          backdrop-filter: blur(12px);
          font-size: 0.82rem;
          font-weight: 600;
          color: #f8fafc;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
          pointer-events: none;
        }

        .badge-top-left {
          top: 2rem;
          left: 1.5rem;
          animation: float 4s ease-in-out infinite;
        }

        .badge-top-right {
          top: 2.5rem;
          right: 1.5rem;
          animation: float 4.5s ease-in-out 1s infinite;
        }

        .badge-bottom-left {
          bottom: 2rem;
          left: 2rem;
          animation: float 4.2s ease-in-out 2s infinite;
        }

        .badge-bottom-right {
          bottom: 2.5rem;
          right: 2rem;
          animation: float 5s ease-in-out 0.5s infinite;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .python-dot {
          background: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
        }

        .ai-dot {
          background: #c084fc;
          box-shadow: 0 0 6px #c084fc;
        }

        .java-dot {
          background: #fbbf24;
          box-shadow: 0 0 6px #fbbf24;
        }

        .db-dot {
          background: #34d399;
          box-shadow: 0 0 6px #34d399;
        }

        .lanyard-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
        }

        .lanyard-instruction-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.22);
          backdrop-filter: blur(8px);
          color: var(--accent-cyan);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          user-select: none;
          margin-bottom: 0.5rem;
          box-shadow: 0 0 16px rgba(6, 182, 212, 0.12);
        }

        .lanyard-direct-area {
          width: 100%;
          max-width: 520px;
          height: 600px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content > div:nth-of-type(2) {
            justify-content: center;
          }

          .hero-content .btn {
            width: 100%;
            max-width: 280px;
          }

          .lanyard-direct-area {
            max-width: 100%;
            height: 520px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

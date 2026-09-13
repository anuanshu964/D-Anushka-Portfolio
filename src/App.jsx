import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StaggeredMenu from './components/StaggeredMenu';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import { portfolioData } from './data/portfolioData';

export const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Universal smooth scroll handler for all in-page links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => document.removeEventListener('click', handleAnchorClick, { capture: true });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
    { label: 'About', ariaLabel: 'About Anushka', link: '#about' },
    { label: 'Skills', ariaLabel: 'Technical Skills & Bento Matrix', link: '#skills' },
    { label: 'Certifications', ariaLabel: 'Certifications & Credentials', link: '#certifications' },
    { label: 'Education', ariaLabel: 'Academic Background', link: '#education' },
    { label: 'Projects', ariaLabel: 'Featured Projects', link: '#projects' },
    { label: 'Contact', ariaLabel: 'Get in Touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: portfolioData.personal.linkedinUrl },
    { label: 'GitHub', link: portfolioData.personal.githubUrl },
    { label: 'Email', link: `mailto:${portfolioData.personal.email}` },
    { label: 'Resume', link: portfolioData.personal.resumePath }
  ];

  return (
    <div className="app-wrapper">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Global Staggered Navigation Menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#06b6d4"
        changeMenuColorOnOpen={true}
        colors={['#06b6d4', '#3b82f6', '#8b5cf6']}
        logoUrl="/src/assets/logo.svg"
        accentColor="#06b6d4"
        isFixed={true}
      />

      {/* Ambient Lighting Orbs */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Main Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Desktop Custom Cursor Follower */}
      <CustomCursor />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .glass-card, [role="button"]');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleInteractiveOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleInteractiveOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="cursor-follower"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          borderColor: isHovered ? 'var(--accent-cyan)' : 'rgba(56, 189, 248, 0.4)',
          background: isHovered ? 'rgba(6, 182, 212, 0.08)' : 'transparent'
        }}
        aria-hidden="true"
      />
      {/* Inner precise dot */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isHovered ? 0.4 : 1
        }}
        aria-hidden="true"
      />
      <style>{`
        .cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(56, 189, 248, 0.4);
          pointer-events: none;
          z-index: 99999;
          transition: transform 0.15s cubic-bezier(0.1, 1, 0.1, 1), border-color 0.2s ease, background 0.2s ease;
          mix-blend-mode: difference;
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: var(--accent-cyan);
          border-radius: 50%;
          pointer-events: none;
          z-index: 100000;
          transition: opacity 0.2s ease;
        }

        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          .cursor-follower, .cursor-dot {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

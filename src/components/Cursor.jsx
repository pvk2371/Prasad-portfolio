import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Detect mobile touch devices - cursor is only for desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over links, buttons, or custom-hover elements
      const target = e.target;
      if (!target) return;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.interactive-card') !== null ||
        target.classList.contains('clickable');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#7F5539] pointer-events-none z-[9999] transition-transform duration-100 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
      {/* Outer wooden border circle */}
      <div
        ref={cursorRef}
        id="custom-cursor-ring"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-[#B08968]/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.8) bg-rgba(127, 85, 57, 0.05)' : 'scale(1)'}`,
          borderColor: isHovered ? '#C9A227' : 'rgba(176, 137, 104, 0.5)',
          backgroundColor: isHovered ? 'rgba(127, 85, 57, 0.04)' : 'transparent',
        }}
      />
    </>
  );
}

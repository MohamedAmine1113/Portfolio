import React, { useEffect, useRef, ReactElement } from 'react';
import gsap from 'gsap';

type GsapMagicIconsProps = { children: ReactElement };

const GsapMagicIcons: React.FC<GsapMagicIconsProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = magnetic.current;
    if (!element || !window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const xTo = gsap.quickTo(element, 'x', { duration: 0.65, ease: 'elastic.out(1.5, 0.8)' });
    const yTo = gsap.quickTo(element, 'y', { duration: 0.65, ease: 'elastic.out(1.5, 0.8)' });
    const move = (e: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      xTo((e.clientX - bounds.left - bounds.width / 2) * 0.35);
      yTo((e.clientY - bounds.top - bounds.height / 2) * 0.35);
    };
    const leave = () => { xTo(0); yTo(0); };
    element.addEventListener('mousemove', move);
    element.addEventListener('mouseleave', leave);
    return () => {
      element.removeEventListener('mousemove', move);
      element.removeEventListener('mouseleave', leave);
      gsap.killTweensOf(element);
    };
  }, []);
  return <div ref={magnetic}>{children}</div>;
};

export default GsapMagicIcons;

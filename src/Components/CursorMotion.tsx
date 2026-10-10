import React, { useRef, createContext, useContext, useEffect } from 'react';
import gsap from 'gsap';

export const CursorMotion = createContext<{ scaleCursor: (s: number) => void, resetCursor: (s: number) => void, setZIndex: (z: number) => void } | null>(null);
export const useCursor = () => useContext(CursorMotion);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.32, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.32, ease: 'power3.out' });
    const onMove = (e: MouseEvent) => { xTo(e.clientX - 15); yTo(e.clientY - 15); };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); gsap.killTweensOf(cursor); };
  }, []);
  const setZIndex = (z: number) => { if (cursorRef.current) cursorRef.current.style.zIndex = String(z); };
  const scaleCursor = (scale: number) => {
    if (cursorRef.current && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      gsap.to(cursorRef.current, { scale, duration: 0.36, overwrite: 'auto', ease: 'power3.out' });
    }
  };
  const resetCursor = (scale: number) => scaleCursor(scale);
  return (
    <CursorMotion.Provider value={{ scaleCursor, resetCursor, setZIndex }}>
      <div ref={cursorRef} id="cursor" className="fixed top-0 left-0 hidden md:block h-[30px] w-[30px] rounded-full pointer-events-none -z-100 bg-[#EC5938]" />
      {children}
    </CursorMotion.Provider>
  );
};

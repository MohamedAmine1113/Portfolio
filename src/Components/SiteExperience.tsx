import { useEffect, useState } from 'react';
import gsap from 'gsap';

/** Discreet site-wide enhancements; no existing layout or styles are replaced. */
export default function SiteExperience() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(() =>
    typeof window !== 'undefined' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0);
      setShowTop(window.scrollY > 550);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!loading) return;
    const overlay = document.getElementById('mbh-intro');
    if (!overlay) return;
    const timeline = gsap.timeline({ onComplete: () => setLoading(false) });
    timeline.fromTo('#mbh-intro-text', { opacity: 0, y: 22, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' })
      .to('#mbh-intro-text', { opacity: 0, y: -18, duration: 0.35, ease: 'power2.in', delay: 0.3 })
      .to(overlay, { autoAlpha: 0, duration: 0.35, ease: 'power2.inOut' }, '<');
    return () => { timeline.kill(); };
  }, [loading]);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[9998] h-[3px] pointer-events-none">
        <div className="h-full bg-[#EC5938] origin-left" style={{ transform: `scaleX(${progress / 100})`, width: '100%' }} />
      </div>

      <button type="button" aria-label="Back to top" title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
        className={`fixed bottom-6 right-6 z-[9997] flex h-11 w-11 items-center justify-center rounded-full border border-[#F5EAE4]/40 bg-[#0D0D0D] text-[#F5EAE4] shadow-lg transition-[opacity,transform] duration-300 hover:border-[#EC5938] hover:text-[#EC5938] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC5938] ${showTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'}`}
        tabIndex={showTop ? 0 : -1}
      >↑</button>

      {loading && (
        <div id="mbh-intro" role="status" aria-label="Loading portfolio"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0D0D] text-[#F5EAE4]">
          <span id="mbh-intro-text" className="font-Quick text-[clamp(48px,12vw,100px)] tracking-wide">
            MBH<span className="text-[#EC5938]">.</span>
          </span>
        </div>
      )}
    </>
  );
}

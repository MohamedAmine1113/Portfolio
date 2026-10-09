import { useState } from 'react';

const links = [
  { label: 'About', href: '#About-section' },
  { label: 'Skills', href: '#skills-section' },
  { label: 'Projects', href: '#Work_section' },
  { label: 'Contact', href: '#Contact-section' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#Home" aria-label="Mohamed Amine Bahmane — Home" className="font-Quick text-3xl font-bold text-[#EC5938]">MBH.</a>
        <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation"
          onClick={() => setOpen(!open)} className="rounded-lg border border-white/20 px-4 py-2 text-sm text-[#F5EAE4] md:hidden">
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
        <ul id="primary-navigation" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0D0D0D] px-5 py-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(link => <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest text-[#F5EAE4]/80 transition hover:bg-white/10 hover:text-[#EC5938] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC5938] md:px-1 md:py-2">{link.label}</a>
          </li>)}
        </ul>
      </nav>
    </header>
  );
}

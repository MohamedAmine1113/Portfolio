import { useState, type FormEvent } from 'react';

export default function Contact_section() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append('access_key', '02379a0c-05e2-4ae2-b85a-f8c2e0016290');
    setLoading(true);
    setStatus('');
    setSuccess(false);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      if (!response.ok) throw new Error('Request failed');
      const result: { success?: boolean } = await response.json();
      if (!result.success) throw new Error('Submission rejected');
      form.reset();
      setSuccess(true);
      setStatus('Thank you! Your message has been sent.');
    } catch {
      setStatus('Could not send your message. Please email me directly or try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="Contact-section" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#EC5938]">Let's collaborate</p>
          <h2 className="mb-6 font-Quick text-clamp-titles">Let's get in touch.</h2>
          <p className="mb-8 max-w-lg leading-8 text-[#F5EAE4]/70">Have an idea, an opportunity or a project in mind? Send a message and let's talk about it.</p>
          <a className="block break-all text-[#EC5938] underline underline-offset-4" href="mailto:mohamed.amine.bahmane@gmail.com">mohamed.amine.bahmane@gmail.com</a>
          <a className="mt-5 inline-block text-sm underline underline-offset-4" href="https://github.com/MohamedAmine1113" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8">
          <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Your name</label><input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} className="w-full rounded-lg border border-white/20 bg-[#171717] px-4 py-3 text-white outline-none focus:border-[#EC5938]" placeholder="Your full name" /></div>
          <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded-lg border border-white/20 bg-[#171717] px-4 py-3 text-white outline-none focus:border-[#EC5938]" placeholder="you@example.com" /></div>
          <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label><textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={5} className="w-full resize-y rounded-lg border border-white/20 bg-[#171717] px-4 py-3 text-white outline-none focus:border-[#EC5938]" placeholder="Tell me about your project..." /></div>
          <button disabled={loading} type="submit" className="rounded-lg bg-[#EC5938] px-6 py-4 font-semibold text-[#0D0D0D] transition hover:bg-[#ff795c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60">{loading ? 'Sending…' : 'Send message ↗'}</button>
          <p role="status" aria-live="polite" className={success ? 'text-sm text-green-300' : 'text-sm text-[#ffad9c]'}>{status}</p>
        </form>
      </div>
    </section>
  );
}

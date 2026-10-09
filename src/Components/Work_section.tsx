import Eco from '../assets/Images/ECO.png';
import gym from '../assets/Images/gym.png';
import shop from '../assets/Images/shop.png';

const projects = [
  { title: 'Mini E-Commerce Website', category: 'Frontend Development', description: 'Responsive shopping experience created with HTML, CSS and JavaScript.', technologies: ['HTML', 'CSS', 'JavaScript'], image: Eco, live: 'https://mohamedamine1113.github.io/MiniProject-ECO/', code: 'https://github.com/MohamedAmine1113/MiniProject-ECO' },
  { title: 'Gym Website', category: 'Web Design', description: 'A fitness-focused website designed to present services and help visitors get started.', technologies: ['WordPress'], image: gym, live: 'https://gym3334.infy.click/', code: '' },
  { title: 'Clothing Website', category: 'E-Commerce', description: 'Online clothing storefront with a clean, product-first presentation.', technologies: ['WordPress'], image: shop, live: 'http://shop3344.free.nf/', code: '' },
];

export default function Work_section() {
  return (
    <section id="Work_section" aria-labelledby="projects-heading" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#EC5938]">Selected work</p><h2 id="projects-heading" className="font-Quick text-clamp-titles">Projects</h2></div>
        <a href="https://github.com/MohamedAmine1113" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#EC5938] px-5 py-3 text-sm font-semibold transition hover:bg-[#EC5938] hover:text-black">All projects ↗</a>
      </div>
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#EC5938]/60">
            <div className="aspect-[16/11] overflow-hidden bg-[#F5EAE4]"><img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="flex flex-col gap-4 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#EC5938]">{String(index + 1).padStart(2, '0')} / {project.category}</span>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="min-h-16 text-sm leading-7 text-[#F5EAE4]/70">{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.technologies.map(tech => <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs">{tech}</span>)}</div>
              <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#EC5938] underline underline-offset-4 hover:text-white">Live website ↗</a>
                {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#EC5938]">Source code ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

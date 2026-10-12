import { Reveal } from './Reveal'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-soft">
            Skills
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-semibold text-white md:text-5xl">What I Bring</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.1 + i * 0.08}>
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-charcoal-soft px-4 py-2 text-sm text-mist transition-colors hover:border-violet-soft/40 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

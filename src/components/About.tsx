import { Reveal } from './Reveal'
import { site } from '../config/site'

export function About() {
  return (
    <section id="about" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-soft">
            About
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-8 text-3xl font-semibold text-white md:text-5xl">Who Am I?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-mist md:text-xl">{site.aboutBody}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-base font-medium text-white/90 md:text-lg">{site.aboutTagline}</p>
        </Reveal>
      </div>
    </section>
  )
}

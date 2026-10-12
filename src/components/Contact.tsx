import { Reveal } from './Reveal'
import { site } from '../config/site'
import { socials } from '../config/socials'
import { SocialIcon } from './SocialIcon'

export function Contact() {
  const visibleSocials = socials.filter((s) => s.url.trim() !== '')

  return (
    <section id="contact" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-soft">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-6 text-3xl font-semibold text-white md:text-5xl">{site.contactLead}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-10 text-lg leading-relaxed text-mist">{site.contactBody}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${site.email}`}
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Email Me
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 space-y-1 text-sm text-mist-dim">
            <p>{site.name} · {site.location}</p>
            <p>{site.email}</p>
          </div>
        </Reveal>

        {visibleSocials.length > 0 && (
          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center justify-center gap-5">
              {visibleSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-white/25 hover:text-white"
                >
                  <SocialIcon name={s.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <footer className="mx-auto mt-28 max-w-6xl border-t border-white/5 pt-8 text-center text-xs text-mist-dim">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </section>
  )
}

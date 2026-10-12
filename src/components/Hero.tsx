import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { site } from '../config/site'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-ink bg-grain px-6 pt-28 pb-20"
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 h-32 w-32 md:h-40 md:w-40"
        >
          <div className="absolute inset-0 rounded-full glow-ring" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-charcoal-soft">
            {site.profilePhoto ? (
              <img
                src={site.profilePhoto}
                alt={`Portrait of ${site.name}`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-mist-dim">
                A
              </div>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-soft"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.h2
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-2xl font-medium text-gradient md:text-4xl"
        >
          {site.headline}
        </motion.h2>

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#works"
            onClick={(e) => handleScrollTo(e, '#works')}
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore My Works
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => handleScrollTo(e, '#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1, y: [0, 8, 0] }}
        transition={reduced ? undefined : { opacity: { delay: 0.8, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
      >
        <span className="block h-9 w-5 rounded-full border border-white/25">
          <span className="mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-white/60" />
        </span>
      </motion.a>
    </section>
  )
}

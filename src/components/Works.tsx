import { useState } from 'react'
import { Reveal } from './Reveal'
import { WorkCard } from './WorkCard'
import { VideoModal } from './VideoModal'
import { works } from '../data/works'
import type { Work } from '../types'

const sortedWorks = [...works].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function Works() {
  const [active, setActive] = useState<Work | null>(null)

  return (
    <section id="works" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-soft">
            Portfolio
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-12 text-3xl font-semibold text-white md:text-5xl">Product Ads</h2>
        </Reveal>

        {sortedWorks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-charcoal-soft/50 py-24 text-center">
            <p className="text-lg text-mist">New work coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorks.map((work, i) => (
              <Reveal key={work.id} delay={Math.min(i * 0.05, 0.3)}>
                <WorkCard work={work} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <VideoModal work={active} onClose={() => setActive(null)} />
    </section>
  )
}

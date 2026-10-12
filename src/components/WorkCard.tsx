import { VideoThumbnail } from './VideoThumbnail'
import type { Work } from '../types'

interface WorkCardProps {
  work: Work
  onOpen: (work: Work) => void
}

const aspectClass: Record<Work['aspect'], string> = {
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  '9:16': 'aspect-[9/16]',
}

export function WorkCard({ work, onOpen }: WorkCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(work)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/8 bg-charcoal-soft text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-soft"
      aria-label={`Play ${work.title}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClass[work.aspect]}`}>
        <VideoThumbnail
          src={work.videoSrc}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center opacity-90 transition-transform duration-300 group-hover:scale-110">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-px">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="truncate text-base font-medium text-white">{work.title}</h3>
      </div>
    </button>
  )
}

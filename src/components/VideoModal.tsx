import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Work } from '../types'
import { isDirectVideoFile, toYouTubeEmbed, toVimeoEmbed } from '../lib/media'

interface VideoModalProps {
  work: Work | null
  onClose: () => void
}

const aspectClass: Record<Work['aspect'], string> = {
  '16:9': 'aspect-video max-w-3xl',
  '1:1': 'aspect-square max-w-xl',
  '9:16': 'aspect-[9/16] max-w-sm',
}

export function VideoModal({ work, onClose }: VideoModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!work) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [work, onClose])

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={work.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full ${aspectClass[work.aspect]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 md:-top-4 md:-right-12"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="h-full w-full overflow-hidden rounded-xl bg-black">
              <VideoPlayer work={work} />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-white">{work.title}</h3>
              {work.description && (
                <p className="mt-1 text-sm text-mist">{work.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function VideoPlayer({ work }: { work: Work }) {
  const url = work.videoSrc

  if (!url) {
    return (
      <div className="flex h-full w-full items-center justify-center text-mist-dim">
        Video unavailable
      </div>
    )
  }

  if (isDirectVideoFile(url)) {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video src={url} controls autoPlay playsInline className="h-full w-full" />
    )
  }

  const embed = toYouTubeEmbed(url) ?? toVimeoEmbed(url)
  if (embed) {
    return (
      <iframe
        src={`${embed}?autoplay=1`}
        title={work.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )
  }

  // Fallback: unrecognized external URL, try a native video tag.
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video src={url} controls autoPlay playsInline className="h-full w-full" />
  )
}

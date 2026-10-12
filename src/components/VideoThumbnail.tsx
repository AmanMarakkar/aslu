import { useEffect, useRef, useState } from 'react'
import { isDirectVideoFile, getYouTubeThumbnail } from '../lib/media'

interface VideoThumbnailProps {
  src: string
  alt?: string
  className?: string
}

/**
 * Shows a thumbnail derived straight from the video itself — no separate
 * thumbnail image needed. For a local/direct video file, it grabs the first
 * frame client-side via a hidden <video> + <canvas>. For a YouTube URL, it
 * uses YouTube's own thumbnail. Loads nothing until the card scrolls near
 * the viewport.
 */
export function VideoThumbnail({ src, alt = '', className }: VideoThumbnailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)
  const [frameUrl, setFrameUrl] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const directFile = isDirectVideoFile(src)
  const youTubeThumb = !directFile ? getYouTubeThumbnail(src) : null

  function handleLoadedMetadata() {
    const video = videoRef.current
    if (!video) return
    // Seeking forces the browser to fetch/decode enough of the file to have
    // a real frame ready — preload="metadata" alone doesn't guarantee that.
    video.currentTime = Math.min(0.15, (video.duration || 1) / 2)
  }

  function captureFrame() {
    const video = videoRef.current
    if (!video || video.videoWidth === 0) return
    const canvas = document.createElement('canvas')
    const maxWidth = 640
    const scale = Math.min(1, maxWidth / video.videoWidth)
    canvas.width = video.videoWidth * scale
    canvas.height = video.videoHeight * scale
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    try {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      setFrameUrl(canvas.toDataURL('image/jpeg', 0.82))
    } catch {
      setFailed(true)
    }
  }

  return (
    <div ref={containerRef} className={className}>
      {frameUrl ? (
        <img src={frameUrl} alt={alt} className="h-full w-full object-cover" />
      ) : youTubeThumb ? (
        <img src={youTubeThumb} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : directFile && visible && !failed ? (
        <>
          <div className="h-full w-full animate-pulse bg-charcoal-soft" />
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={videoRef}
            src={src}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
            className="hidden"
            onLoadedMetadata={handleLoadedMetadata}
            onSeeked={captureFrame}
            onError={() => setFailed(true)}
          />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-charcoal-soft to-ink text-mist-dim">
          {visible ? 'No thumbnail' : ''}
        </div>
      )}
    </div>
  )
}

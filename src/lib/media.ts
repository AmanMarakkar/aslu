/** True when a URL points at a playable video file vs. an external host page (e.g. a YouTube watch URL). */
export function isDirectVideoFile(url: string): boolean {
  return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(url)
}

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.replace('/', '') || null
    }
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v')
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/')[2] ?? null
      if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/')[2] ?? null
    }
    return null
  } catch {
    return null
  }
}

/** Converts common YouTube URLs into an embeddable iframe src. Returns null if the URL isn't recognized YouTube. */
export function toYouTubeEmbed(url: string): string | null {
  const id = getYouTubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : null
}

/** YouTube's own thumbnail for a video URL — no upload needed. Returns null if the URL isn't recognized YouTube. */
export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
}

export function toVimeoEmbed(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean).pop()
      return id ? `https://player.vimeo.com/video/${id}` : null
    }
    return null
  } catch {
    return null
  }
}

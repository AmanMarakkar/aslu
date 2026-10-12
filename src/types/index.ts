export type VideoAspect = '16:9' | '1:1' | '9:16'

export interface Work {
  id: string
  title: string
  description?: string
  aspect: VideoAspect
  /** Local file under /public (e.g. "/media/videos/reel.mp4") or a YouTube/Vimeo URL. */
  videoSrc: string
  date: string
  aiTools?: string[]
  tags?: string[]
}

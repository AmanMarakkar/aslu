export type VideoAspect = '16:9' | '1:1' | '9:16'

export interface Work {
  id: string
  title: string
  description?: string
  /** Free-text group label, e.g. "Product Ads" or "ASMR". Works are displayed grouped by this. */
  category: string
  aspect: VideoAspect
  /** Local file under /public (e.g. "/media/videos/reel.mp4") or a YouTube/Vimeo URL. */
  videoSrc: string
  date: string
  aiTools?: string[]
  tags?: string[]
}

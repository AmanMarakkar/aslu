import type { Work } from '../types'

// Add a new piece of work by copying one of the objects below and editing
// its fields. See README.md → "How to add a video" for the full walkthrough.
//
// - videoSrc: a path to a file in public/media/videos/ (e.g. "/media/videos/my-clip.mp4")
//             OR a YouTube/Vimeo URL (e.g. "https://www.youtube.com/watch?v=...")
// - aspect: "16:9" (widescreen), "1:1" (square), or "9:16" (vertical/reels)
// - thumbnails are generated automatically from the video itself — no separate
//   thumbnail image needed.

export const works: Work[] = [
  {
    id: 'product-ad-1',
    title: 'Product Ad 1',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-1.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-2',
    title: 'Product Ad 2',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-2.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-3',
    title: 'Product Ad 3',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-3.mp4',
    date: '2026-10-12',
  },
]

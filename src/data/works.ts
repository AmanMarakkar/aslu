import type { Work } from '../types'

// Add a new piece of work by copying one of the objects below and editing
// its fields. See README.md → "How to add a video" for the full walkthrough.
//
// - category: groups works into labeled sections, e.g. "Product Ads", "ASMR"
// - videoSrc: a path to a file in public/media/videos/ (e.g. "/media/videos/my-clip.mp4")
//             OR a YouTube/Vimeo URL (e.g. "https://www.youtube.com/watch?v=...")
// - aspect: "16:9" (widescreen), "1:1" (square), or "9:16" (vertical/reels)
// - thumbnails are generated automatically from the video itself — no separate
//   thumbnail image needed.

export const works: Work[] = [
  {
    id: 'product-ad-1',
    title: 'Product Ad 1',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-1.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-2',
    title: 'Product Ad 2',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-2.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-3',
    title: 'Product Ad 3',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-3.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-4',
    title: 'Product Ad 4',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-4.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-5',
    title: 'Product Ad 5',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-5.mp4',
    date: '2026-10-12',
  },
  {
    id: 'product-ad-6',
    title: 'Product Ad 6',
    category: 'Product Ads',
    aspect: '9:16',
    videoSrc: '/media/videos/product-ad-6.mp4',
    date: '2026-10-12',
  },
  {
    id: 'asmr-1',
    title: 'ASMR 1',
    category: 'ASMR',
    aspect: '9:16',
    videoSrc: '/media/videos/asmr-1.mp4',
    date: '2026-10-12',
  },
  {
    id: 'asmr-2',
    title: 'ASMR 2',
    category: 'ASMR',
    aspect: '9:16',
    videoSrc: '/media/videos/asmr-2.mp4',
    date: '2026-10-12',
  },
  {
    id: 'asmr-3',
    title: 'ASMR 3',
    category: 'ASMR',
    aspect: '9:16',
    videoSrc: '/media/videos/asmr-3.mp4',
    date: '2026-10-12',
  },
]

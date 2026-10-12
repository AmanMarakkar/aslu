# Aslah — AI Video Creator Portfolio

A cinematic, dark-themed, single-page portfolio site. Pure frontend — no
backend, database, or login. You add and manage videos by editing one file
and putting your media in a folder, then redeploying.

---

## Running it locally

```
npm install
npm run dev
```

Open the address it prints (usually `http://localhost:5173`).

To build the production files:

```
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere.

---

## How to add a video (step by step)

1. Put your video file in **public/media/videos/** (e.g. `public/media/videos/city-reel.mp4`), or skip this if you're linking to a YouTube/Vimeo video instead.
2. Put a thumbnail image in **public/media/thumbnails/** (e.g. `public/media/thumbnails/city-reel.jpg`).
3. Open **src/data/works.ts** and add a new entry to the `works` array:

   ```ts
   {
     id: 'city-reel',               // unique, no spaces
     title: 'Cinematic City Reel',
     description: 'A moody AI-generated city flythrough.',
     category: 'AI Videos',         // 'AI Videos' | 'Product Ads' | 'Experimental' | 'AI ASMR'
     aspect: '16:9',                 // '16:9' | '1:1' | '9:16' — match your video's shape
     videoSrc: '/media/videos/city-reel.mp4',
     // or, instead of a local file: videoSrc: 'https://www.youtube.com/watch?v=...',
     thumbnailSrc: '/media/thumbnails/city-reel.jpg',
     date: '2026-09-01',            // controls sort order, newest first
     aiTools: ['Runway', 'Midjourney'],  // optional
     tags: ['cinematic', 'city'],        // optional
   },
   ```

4. Save, then run `npm run dev` to preview, or redeploy to see it live.

**To edit or remove a video:** find its entry in `src/data/works.ts` and change or delete it.

**Video sources:** `videoSrc` accepts either a local file path under `public/media/videos/`, or a YouTube/Vimeo URL (the modal auto-embeds those). Large videos are best hosted on YouTube/Vimeo rather than bundled with the site.

---

## Changing your profile photo

1. Put your photo in **public/media/profile/** (e.g. `public/media/profile/photo.jpg`).
2. Open **src/config/site.ts** and set:

   ```ts
   profilePhoto: '/media/profile/photo.jpg',
   ```

---

## Editing site text and social links

- **Headline, intro, about text, contact info:** edit [src/config/site.ts](src/config/site.ts).
- **Social icons** (Instagram, TikTok, YouTube, LinkedIn, GitHub): edit [src/config/socials.ts](src/config/socials.ts). Leave a platform's `url: ''` empty to hide its icon automatically.

---

## Deploying

This is a static site — any static host works. For Vercel or Netlify:

1. Push this project to a GitHub repository.
2. **Vercel:** [vercel.com](https://vercel.com) → Add New → Project → import the repo → Deploy. (Framework preset: Vite.)
3. **Netlify:** [netlify.com](https://netlify.com) → Add new site → Import an existing project → pick the repo. Build command: `npm run build`, publish directory: `dist`.

No environment variables or extra setup are needed.

---

## Project structure, for reference

```
public/
  media/
    videos/        Your local video files, referenced from src/data/works.ts
    thumbnails/     Thumbnail images for the works grid
    profile/        Your profile photo
src/
  components/      Reusable UI pieces (Navbar, Hero, About, Works, Contact, etc.)
  pages/
    Home.tsx         The single page that assembles all sections
  data/
    works.ts          Edit this to add/edit/remove videos
  config/
    site.ts            Editable site text, contact info, profile photo path
    socials.ts          Social links (empty url hides the icon)
  lib/
    media.ts            YouTube/Vimeo URL helpers
```

## Tech stack

React + TypeScript + Vite + Tailwind CSS + Framer Motion. No backend.

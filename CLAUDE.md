# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Next.js dev server at http://localhost:3000
npm run build        # Static export to out/ (uses output: 'export')
npm run build:local  # Same as build, forces NODE_ENV=production
npm run start        # Serve a production build (rarely useful — site is exported statically)
npm run clean        # rm -rf .next out
```

There are no lint or test scripts. TypeScript is checked implicitly by `next build` (`tsconfig.json` has `strict: false`).

Node 18+ is required (`.nvmrc` pins 18; the CI workflow uses Node 20). Either npm or yarn works — the deploy workflow auto-detects based on lockfile presence.

## Architecture

Next.js 14 Pages Router app (not App Router) that statically exports a podcast UI. There is **no backend at runtime** — episode data is a hardcoded TypeScript array.

### Data flow

- [src/data/episodes.ts](src/data/episodes.ts) is the single source of truth for episodes. It exports `Episode`, the `episodes` array, and three helpers: `getAllEpisodes()`, `getLatestEpisodes(limit)`, `getEpisodeBySlug(slug)`.
- Pages call these helpers inside `getStaticProps` / `getStaticPaths`. Because `next.config.js` sets `output: 'export'`, dynamic pages (`[slug].tsx`) **must** use `getStaticPaths` with `fallback: false` — ISR, SSR, and API routes are not available.
- [src/services/api.ts](src/services/api.ts) is a legacy axios client pointing at `http://localhost:3333/` from when the project ran against a JSON Server. It is no longer imported anywhere — don't wire new code to it; add to `src/data/episodes.ts` (or replace it) instead.

### Player state

A single React Context, [src/contexts/PlayerContext.tsx](src/contexts/PlayerContext.tsx), owns the entire playback state machine (`episodeList`, `currentEpisodeIndex`, `isPlaying`, `isLooping`, `isShuffling`). [src/pages/_app.tsx](src/pages/_app.tsx) wraps every page in `PlayerContextProvider` and renders `<Header />`, the active page `<Component />`, and `<Player />` siblings — the player is global and persists across navigation.

The `<Player />` component ([src/components/player/player.tsx](src/components/player/player.tsx)) is the only place that actually touches the `<audio>` element: a `useEffect` watching `isPlaying` calls `audioRef.current.play() / pause()`, and `onPlay` / `onPause` callbacks sync the audio element's events *back* into context state via `setPlayingState`. Keep this two-way sync intact when modifying playback logic.

Consume the context with `usePlayer()` — it throws if used outside the provider.

## Deploy

Pushing to `master` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `next build`, copies `public/CNAME` and `public/.nojekyll` into `out/`, and publishes to GitHub Pages. The site serves from the custom domain in [public/CNAME](public/CNAME) (`podcast.victorandra.de`), which is why [next.config.js](next.config.js) has `basePath: ''` and `assetPrefix: ''` — do **not** set a basePath here, it would break the custom domain. (Note: README.md still mentions `/podcastrnext` basePath and a `deploy:gh-pages` script; both are stale.)

`public/.nojekyll` must remain present — without it GitHub Pages strips Next's `_next/` asset directory.

## Conventions

- All user-facing strings and dates are pt-BR (`date-fns/locale/pt-BR`).
- Styling is SCSS Modules (`*.module.scss`) co-located with each component / page; global resets live in [src/styles/global.scss](src/styles/global.scss) and the app shell layout in [src/styles/app.module.scss](src/styles/app.module.scss).
- `next/image` is used with `unoptimized: true` (required for static export); allowed remote hosts (`storage.googleapis.com`, `res.cloudinary.com`) are declared in `next.config.js` — add new hosts there before referencing them.

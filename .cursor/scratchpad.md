# Background and Motivation

The user wants a reliable, step-by-step process to preview this Vite + React + SHADCN TypeScript website both in development and production mode. Ensuring dependencies are installed and preview commands work smoothly will improve their development workflow.

# Key Challenges and Analysis

- The `vite` command was not found, indicating dependencies may not be installed.
- We need to verify the correct install sequence and commands.
- Must handle both dev-mode preview (with hot reload) and production-mode preview (using `vite preview`).

# High-level Task Breakdown

- [ ] Task 1: Install all project dependencies (npm or bun).
  - Success: `node_modules` exists, `npm ls` shows no missing.
- [ ] Task 2: Start the development server.
  - Success: Dev server logs a listening URL (e.g. `localhost:5173`).
- [ ] Task 3: Build the production bundle.
  - Success: `dist/` folder created without errors.
- [ ] Task 4: Run the production preview server.
  - Success: Preview logs a listening URL (e.g. `localhost:4173`).

# Project Status Board

- [x] Install dependencies
- [x] Start dev server
- [ ] Build production
- [ ] Run preview
- [x] Change logo font and case
- [x] Add hover effect to ProjectCard
- [x] Include location and year in overlay, remove static labels

# Executor's Feedback or Assistance Requests

- Updated `Header.tsx` to use the sans serif font and lowercase the logo text as requested.
- Ran `npm audit fix`; 4 moderate vulnerabilities remain (in esbuild/vite). No automatic fixes available.
- Next up is starting the development server: shall I proceed with `npm run dev`?
- Attempted to start the dev server with `npm run dev`, but got:
  ```
  sh: vite: command not found
  ```
- Would you like me to try running `npx vite` directly, or investigate the missing Vite binary further?
- Started the development server in the background at http://localhost:8080 (via `npx vite`).
- Updated `ProjectCard.tsx` to include a softly animated hover overlay on project images matching the homepage effect.
- Updated `ProjectCard.tsx` so the overlay now shows the project title, location, and year, and removed the static title/place below each tile.

# Lessons 

- `npm audit fix` may not fix vulnerabilities in transitive dependencies like esbuild; manual dependency upgrades or alternative versions may be needed in the future.
- If `npm run` scripts cannot find a binary, using `npx <binary>` can run a local dependency's executable directly.
- `font-helvetica` is the correct Tailwind family for the base sans serif font configured in this project.
- Extracted overlay pattern from `ImageGridItem` to reuse in `ProjectCard` for consistent UX.
- Consistent hover overlays improve UX; ensure static elements don't duplicate overlay info. 
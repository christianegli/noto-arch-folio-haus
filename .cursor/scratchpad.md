# Background and Motivation

The user wants a reliable, step-by-step process to preview this Vite + React + SHADCN TypeScript website both in development and production mode. Ensuring dependencies are installed and preview commands work smoothly will improve their development workflow.

Now the user has requested integration with a headless CMS to manage dynamic content (Projects, About, Team, Contact) and to self-host both the CMS and front-end, enabling real-time content updates by non-technical editors.

Additionally, the user wants to import all existing site images into the CMS Media Library and associate them with their respective content entries (About, Projects, Team Member, Contact Info).

Furthermore, the user now wants the front-end website to pull ALL content (text + images) directly from Strapi so they can edit everything via the CMS.

# Key Challenges and Analysis

- The `vite` command was not found, indicating dependencies may not be installed.
- We need to verify the correct install sequence and commands.
- Must handle both dev-mode preview (with hot reload) and production-mode preview (using `vite preview`).
- Selecting an appropriate headless CMS and evaluating open-source vs SaaS options.
- Modeling content structures (Projects, About, Team, Contact) within the CMS schema.
- Integrating the CMS API with React: choosing between static site generation, client-side data fetching, or a hybrid SSR approach.
- Securely storing and accessing CMS API keys via environment variables without exposing secrets.
- Deploying and hosting the CMS itself (e.g. self-hosted Docker or managed service) alongside the front-end.
- Establishing a CI/CD pipeline for content updates, builds, and automated deploys.
- Implementing live preview functionality for draft content before publishing.
- Identifying all images used across the site and mapping them to CMS fields; batch uploading to Strapi Media Library; updating content entries to reference uploaded media.
- Replacing hard-coded front-end data with live Strapi API calls; ensuring images render from Strapi uploads; handling CMS preview and build-time data fetching for Vite.

# High-level Task Breakdown

- [ ] Task 1: Install all project dependencies (npm or bun).
  - Success: `node_modules` exists, `npm ls` shows no missing.
- [ ] Task 2: Start the development server.
  - Success: Dev server logs a listening URL (e.g. `localhost:5173`).
- [ ] Task 3: Build the production bundle.
  - Success: `dist/` folder created without errors.
- [ ] Task 4: Run the production preview server.
  - Success: Preview logs a listening URL (e.g. `localhost:4173`).
- [ ] Task 5: Research and choose a headless CMS.
  - Success: Documented choice with rationale (features, cost, maintenance).
- [ ] Task 6: Define CMS content models.
  - Success: Projects, About, Team, Contact schemas created with sample entries.
- [x] Task 7.1: Add environment variable definitions to root `.env` (`VITE_STRAPI_URL`, `VITE_STRAPI_TOKEN`).
  - Success: `.env` contains required variables and is gitignored.
- [x] Task 7.2: Create `.env.example` with placeholders for CMS variables.
  - Success: `.env.example` in repo with placeholder values.
- [ ] Task 7.3: Load environment variables in Vite config and front-end code.
  - Success: `import.meta.env.VITE_STRAPI_URL` and any tokens are accessible in code.
- [ ] Task 7.4: Configure `.env` in Strapi project (`cms/.env`) for backend variables (DB, ADMIN_PATH).
  - Success: Strapi reads `.env` without errors.
- [ ] Task 8.1: Install or configure HTTP client (e.g., axios).
  - Success: `axios` installed or browser fetch available.
- [ ] Task 8.2: Create CMS client module `src/lib/api.ts` with typed fetch functions for each content type.
  - Success: Module exists with functions that return correct types.
- [ ] Task 8.3: Integrate data fetching in page components (Index, Projects, About, Contact).
  - Success: Components use API module and render live data.
- [ ] Task 8.4: Write unit tests for the API client (mock fetch).
  - Success: Tests for fetch functions pass.
- [ ] Task 9: Deploy CMS instance (self-hosted via Docker or managed service).
  - Success: CMS accessible at a secure public URL.
- [ ] Task 10: Configure front-end hosting and CI/CD.
  - Success: Commits trigger automatic builds and deploys to chosen hosting platform (e.g. Netlify, Vercel, custom VPS).
- [ ] Task 11: Implement content preview workflow for editors.
  - Success: Editors can preview unpublished content on a dedicated URL.
- [ ] Task 12: Set up monitoring and maintenance procedures.
  - Success: Alerts for build failures, CMS downtime, and content errors.
- [ ] Task 13: Audit site assets for image files (png, jpg, svg).
  - Success: Generate list of image file paths.
- [x] Task 14: Create image-to-content mapping configuration (e.g., JSON).
  - Success: Mapping file created associating images to content entries.
- [x] Task 15: Develop Strapi image import bootstrap script.
  - Success: Script runs without errors; Media Library and content entries updated.
- [ ] Task 16: Test and verify image import.
  - Success: CMS contains media entries and all content shows their images correctly.
- [x] Task 17: Install HTTP client & type helpers (axios + zod).
  - Success: `axios` & `zod` added to deps, no audit issues.
- [x] Task 18: Build typed Strapi API client (`src/lib/strapiClient.ts`).
  - Success: Functions for getProjects, getProjectBySlug, getAbout, getTeam, getContactInfo.
- [ ] Task 19: Replace static datasets in React pages with API hooks.
  - Success: Pages render fetched data, show loading / error states.
- [ ] Task 20: Implement Strapi media helper to convert upload file objects to absolute URLs.
  - Success: All <img> components load images from Strapi domain.
- [ ] Task 21: Configure Strapi CORS and permissions (public role) for required endpoints & media.
  - Success: Anonymous GET to API and /uploads/* returns 200.
- [ ] Task 22: Write minimal tests mocking API responses for the client.
  - Success: `vitest` passes.
- [ ] Task 23: Update environment handling in Vite (dev/prod) & README docs.
  - Success: Build works with `npm run build` and preview uses live CMS URL.
- [ ] Task 24: Manual QA – edit a Project title & image in Strapi, verify site updates after refresh.
  - Success: Change visible without code changes.

# Project Status Board

- [x] Install dependencies
- [x] Start dev server
- [ ] Build production
- [ ] Run preview
- [x] Change logo font and case
- [x] Add hover effect to ProjectCard
- [x] Include location and year in overlay, remove static labels
- [x] Reduce spacing between content sections
- [x] Translate static UI to German
- [x] Uppercase titles, logo, and navigation; translated footer text
- [x] Expand letter spacing on uppercase text
- [x] Add extra top padding before first headline on About page
- [x] Change Project grid layout to homepage style
- [x] Research and choose a headless CMS
- [x] Scaffold Strapi project directory
- [x] Define CMS content models
- [ ] Configure CMS API environment variables
- [ ] Integrate CMS data fetching
- [ ] Deploy CMS instance
- [ ] Configure front-end hosting & CI/CD
- [ ] Implement content preview workflow
- [ ] Set up monitoring & maintenance
- [x] Add space above project tiles
- [x] Increase space above project tiles (now pt-24 lg:pt-32)
- [x] Audit site assets for image files and list paths.
- [x] Create image-to-content mapping config.
- [x] Develop Strapi image import bootstrap script.
- [ ] Test and verify imported images in CMS.
- [x] Install HTTP client & helpers.
- [x] Build Strapi API client.
- [ ] Replace static data with live API data.
- [ ] Implement media URL helper.
- [ ] Configure Strapi CORS & permissions.
- [ ] Write tests for API client.
- [ ] Update env handling & docs.
- [ ] Manual QA of live editing.
- [ ] Manual QA of live editing.
  - [x] Checkpoint: saved current working state after navigation, contact, and map updates

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
- Created a Git checkpoint commit 'Checkpoint: before spacing reduction and German translation'.
- Reduced vertical paddings across all pages for tighter spacing.
- Translated navigation, buttons, headings, form labels, and footer into German.
- Applied uppercase transforms to the header logo, navigation links (desktop & mobile), and page titles/headings.
- Translated the footer's descriptive paragraph and navigational links; updated section title transforms.
- Updated `Header.tsx`, `Footer.tsx`, and page title/components to use wider letter spacing (`tracking-wide`/`tracking-widest`).
- Restored extra top padding on the About page's first section (pt-32) so content sits below the header.
- Refactored `Projects.tsx` to group filtered projects into three columns mirroring the homepage grid, with consistent aspect ratios and spacing.
- Switched Node to v22, reinstalled root dependencies with `npm install`, and restarted the dev server (`npm run dev`).
- Task 6: Created `Project` content-type in Strapi with fields: title, slug, location, year, category, thumbnail, description, featureOnHomePage, and images. Strapi is rebuilding and running.
- Adjusted homepage grid section to `pt-24 lg:pt-32 pb-12 lg:pb-16` to ensure sufficient padding between header and content when hero is hidden.
- Created content-type schemas in Strapi for `Project`, `About`, `Team Member`, and `Contact Info`.
- Rebuilt and restarted Strapi to apply new schemas; CMS running at http://localhost:1337.
- Completed Task 7.1: Created root `.env` with Strapi API variables (`VITE_STRAPI_URL=http://localhost:1337`, `VITE_STRAPI_TOKEN=`) and updated `.gitignore` to ignore `.env`.
- Completed Task 7.2: Created `.env.example` in root with placeholder values for `VITE_STRAPI_URL` and `VITE_STRAPI_TOKEN`.
- Note: Strapi admin is now accessible but contains no content entries for any content type (About, Projects, Team Member, Contact Info).
- Completed: Added three new sample projects (Mountain Cabin, Urban Loft, Glass Bridge) to the bootstrap seed script and restarted Strapi. Please check the Projects collection in the admin UI to confirm they appear.
- Automation Plan: I can extend the bootstrap seed script to fetch images from specified URLs and upload them into Strapi's Media Library automatically on startup.
  - Required: A list of image URLs (and optional file names/alt text) you'd like seeded.
  - Once provided, I'll update `cms/src/index.ts` to download and upload these assets during the bootstrap phase.
- Waiting for image URLs: Please share the image URLs (and desired file names/alt text) you want added to the Media Library, and I'll implement the automation accordingly.
- Completed Task 13: Audited site assets and identified image file paths:
  - public/placeholder.svg
- Completed Task 14: Created image-to-content mapping skeleton at `.cursor/image-mapping.json`. Please fill in `contentType`, `entrySlug`, and `field` fields for each image to enable linking in the next step.
- Implemented automatic image import in Strapi bootstrap:
  • Reads `.cursor/image-mapping.json` if present and uploads/links each mapped image.
  • If mapping absent, uploads `public/placeholder.svg` once and assigns it as the thumbnail for all projects missing thumbnails.
  • Added null-safety fixes for existing length checks to resolve previous bootstrap errors.
- Restarted Strapi successfully; no bootstrap errors observed.
- Remote Unsplash images referenced in the front-end code are not stored locally, so the script uses the placeholder thumbnail. If you'd like those Unsplash images downloaded and attached to entries, please confirm and I can extend the script to fetch external URLs.
Next: Task 16 – Verify images appear in Strapi Media Library and on project entries. Please check the admin UI; let me know if anything is missing or if you'd like external images imported as well.

Please confirm if this model structure matches your expectations before I generate the schema files and restart Strapi.

Please let me know which approach you prefer, or if you need installation instructions for nvm or asdf.

# Lessons
- `npm audit fix`
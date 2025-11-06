# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for GreenFlux, LLC (Joseph Petty) built with Astro 5 and Tailwind CSS, deployed via GitHub Pages.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:4321)
npm run build           # Build for production (outputs to dist/)
npm run preview         # Preview production build locally
```

## Architecture

### Static Site Generation
- **Framework**: Astro 5 with static site generation (SSG)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide icons via ESM import
- **Deployment**: GitHub Actions → GitHub Pages (automatic on push to main)

### Data-Driven Design
All content is separated from layout and stored in JSON files:

- `src/data/portfolio.json` - Portfolio project items with metadata
- `src/data/site.json` - Site-wide content (about, social links, company info)

To add/modify content, edit these JSON files rather than components.

### Component Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with View Transitions
├── components/
│   ├── Navigation.astro      # Sticky nav with mobile menu
│   ├── Hero.astro           # Hero section with banner
│   ├── Portfolio.astro      # Portfolio grid (reads from JSON)
│   ├── About.astro          # About section
│   ├── Social.astro         # Social links and resources
│   └── Footer.astro         # Footer
├── pages/
│   ├── index.astro          # Main page (composes all sections)
│   └── portfolio/
│       ├── farm-co-op.astro
│       └── safety-clearance.astro
├── data/
│   ├── portfolio.json       # Portfolio items data
│   └── site.json           # Site content and metadata
└── styles/
    └── global.css          # Tailwind + custom theme variables
```

### Color Theme

Dark theme with green accents matching greenflux.us:

```css
--color-dark: #0a0a0a           /* Primary background */
--color-darker: #000000          /* Darker sections */
--color-green-primary: #00d600   /* Primary green accent */
--color-green-bright: #00ff00    /* Bright green hover */
--color-text-primary: #ffffff    /* White text */
--color-text-secondary: #a0a0a0  /* Gray text */
```

Use Tailwind classes: `bg-dark`, `bg-darker`, `text-green-primary`, etc.

### View Transitions

View Transitions are enabled globally in Layout.astro for smooth page navigation.

## Adding Portfolio Items

Edit `src/data/portfolio.json` and add a new object to the `items` array:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "path": "/portfolio/project-slug",
  "description": "Project description",
  "image": "/images/project.png",
  "tags": ["JavaScript", "API"]
}
```

For external links, use full URLs in `path`. Internal portfolio detail pages should be created in `src/pages/portfolio/`.

## Deployment

Deployment is automatic via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs `npm run build`
3. Deploys `dist/` folder to GitHub Pages
4. Site available at https://greenflux.github.io

Workflow file: `.github/workflows/deploy.yml`

## Code Style Preferences

- No emojis in code or comments unless explicitly requested
- Minimal, purposeful comments
- Keep code simple and direct
- Data-driven approach - content in JSON, not hardcoded
- Functions over classes where possible

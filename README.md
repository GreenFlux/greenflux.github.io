# GreenFlux Portfolio

Portfolio website for GreenFlux, LLC (Joseph Petty) built with Astro 5 and Tailwind CSS v4.

**Live Site**: https://greenflux.github.io

## Technical Stack

- **Framework**: Astro 5 (Static Site Generation)
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **Icons**: lucide-astro
- **Deployment**: GitHub Pages via GitHub Actions
- **View Transitions**: Enabled globally for smooth navigation

## Project Structure

```
/
├── public/
│   ├── images/            # Static images
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # Site structure for SEO
│   └── favicon.svg        # Site icon
├── src/
│   ├── components/        # Astro components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Portfolio.astro
│   │   ├── About.astro
│   │   ├── Social.astro
│   │   └── Footer.astro
│   ├── data/              # Content data (JSON)
│   │   ├── portfolio.json # Portfolio items with metadata
│   │   └── site.json      # Site-wide content
│   ├── layouts/
│   │   └── Layout.astro   # Base layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro    # Main landing page
│   │   └── portfolio/     # Portfolio detail pages
│   └── styles/
│       └── global.css     # Global styles and CSS variables
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── CLAUDE.md              # Claude Code context file
└── package.json
```

## Data-Driven Architecture

All content is separated from layout and stored in JSON files:

- `src/data/portfolio.json` - Portfolio project items
- `src/data/site.json` - Site-wide content (about, social links, company info)

To add or modify content, edit these JSON files rather than modifying components.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:4321)
npm run build           # Build for production (outputs to dist/)
npm run preview         # Preview production build locally
```

## Deployment

Automatic deployment via GitHub Actions on push to `main` branch:

1. Workflow runs `npm run build`
2. Deploys `dist/` folder to GitHub Pages
3. Site available at https://greenflux.github.io

Workflow configuration: `.github/workflows/deploy.yml`

## Color Theme

Dark theme with green accents:

```css
--color-dark: #0a0a0a           /* Primary background */
--color-darker: #000000          /* Darker sections */
--color-green-primary: #00d600   /* Primary green accent */
--color-green-bright: #00ff00    /* Bright green hover */
--color-text-primary: #ffffff    /* White text */
--color-text-secondary: #a0a0a0  /* Gray text */
```

## SEO Optimization

- Open Graph meta tags for social media sharing
- Twitter Card meta tags
- Canonical URLs
- robots.txt for search engine crawlers
- sitemap.xml for search indexing
- Optimized images with lazy loading
- Semantic HTML structure

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

For external links, use full URLs in `path`. For internal detail pages, create a new file in `src/pages/portfolio/`.

## Performance Optimizations

- Lazy loading for below-the-fold images
- Eager loading with fetchpriority="high" for critical images (logo, hero)
- npm-based icon library (lucide-astro) instead of CDN
- Optimized image formats and sizes
- Minimal JavaScript footprint

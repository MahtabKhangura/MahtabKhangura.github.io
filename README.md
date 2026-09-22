# Mahtab Khangura — personal site

Astro static portfolio for [GitHub Pages](https://mahtabkhangura.github.io). Project pages are Markdown; the home page pulls your bio and a project grid from content collections.

## Local development

Requirements: Node.js 18.18+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # output in dist/
npm run preview  # serve the production build locally
```

## Customize site-wide settings

Edit [`src/data/site.yaml`](src/data/site.yaml):

- Name, tagline, SEO title/description
- Email and social links
- Optional `avatar` path — wide splash image below About text (file in `public/`, e.g. `/avatar.jpeg`)
- Header navigation items

## Edit your background (home page)

Edit [`src/content/home/index.md`](src/content/home/index.md) for intro copy. Skills and similar sections live in [`src/content/home/skills.md`](src/content/home/skills.md)—the profile image from `site.yaml` is shown between them.

## Add a project

1. Copy [`src/content/projects/_template.md`](src/content/projects/_template.md) to `src/content/projects/your-slug.md` (the filename becomes the URL: `/projects/your-slug/`).
2. Put images in `public/projects/your-slug/` and reference them in frontmatter (`thumbnail`, `images`).
3. Set `order` (lower numbers appear first on the home page) and `featured: false` to hide work-in-progress projects.
4. Commit and push to `main`.

Frontmatter is validated in [`src/content/config.ts`](src/content/config.ts)—invalid fields fail the build with a clear error.

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time GitHub setup:

1. Repository **Settings → Pages**
2. **Build and deployment → Source**: GitHub Actions

After the first successful workflow run, the site is live at `https://mahtabkhangura.github.io`.

## Project structure

| Path | Purpose |
|------|---------|
| `src/pages/` | Routes (`index.astro`, dynamic project pages) |
| `src/layouts/` | Shared page shells |
| `src/components/` | UI pieces (cards, gallery, etc.) |
| `src/content/projects/` | One Markdown file per project |
| `src/content/home/` | Home page “about” copy |
| `src/data/site.yaml` | Global site metadata |
| `public/` | Static assets (images, favicon) |

Remove or rename [`src/content/projects/example-project.md`](src/content/projects/example-project.md) when you add real projects.

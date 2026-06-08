# Yolanda Portfolio

Image-first personal portfolio for architecture, photography, graphics, editorial, and archive projects. The site is a Vite React app with animated page transitions and client-side routing.

## Quick Start

```bash
npm install
npm run dev
```

Use `npm run build` to create the production output in `dist/`, and `npm run preview` to inspect that build locally.

## Project Map

- `src/App.jsx` defines the public routes: `/`, `/projects`, `/projects/:slug`, and `/about`.
- `src/data/projects.js` is the source of truth for project categories, cards, detail copy, image paths, and adjacent-project navigation.
- `src/data/profile.js` is the source of truth for bio, experience, skills, contact details, and footer contact links.
- `src/pages/` contains page-level views.
- `src/components/` contains reusable navigation, footer, and project-card components.
- `src/styles.css` contains global layout, responsive behavior, and visual styling.
- `public/images/` contains the served portfolio images referenced by the app.
- `asset/` contains local source or working media that is not committed or served directly unless copied or converted into `public/images/`.

## Editing Content

To add a project, add one object to `projects` in `src/data/projects.js`. Each project needs a unique `slug`, `title`, `year`, `category`, `cover`, `summary`, `description`, `role`, `tools`, and `images` array. The `category` should match one of the filters exported from the same file.

Images referenced in project data should use public paths such as `/images/projects/example-cover.svg`. Put browser-ready assets in `public/images/`; keep raw files, PDFs, and source media in local `asset/`.

## Notes

There are no environment variables or backend services in this project.

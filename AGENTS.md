# AGENTS.md

## Project Rules

- Keep changes small and tied to the requested portfolio behavior or content.
- Follow the existing Vite React structure; do not introduce a new framework or state layer for ordinary page/content edits.
- Treat `src/data/projects.js` and `src/data/profile.js` as the content sources of truth.
- Use `public/images/` for browser-served assets. Keep raw source media in `asset/` unless the app references it directly after conversion or copying.
- Match the existing CSS style in `src/styles.css`; avoid unrelated visual refactors.
- Do not add backend, persistence, authentication, or environment-variable handling unless explicitly requested.

## Image Rules (always apply unless the owner asks otherwise)

- No white margins: crop blank white borders off every served project image, both the full-size file and its `-1200` copy. Measure the real content edge; do not crop into the drawing itself. If an image's drawing already runs to the edge, leave it.
- Covers (`cover`) must have no white edges and display centered; keep the default centered `object-fit: cover`, with no offset `object-position`.
- Multi-image sheets: when the original source puts several renderings on one sheet, serve the original sheet as a single image instead of splitting it into crops, unless asked to split.
- Captions are short titles only (for example `biology diagram`, `site plan`, `model photo`). No descriptive sentences, explanations, or lists of contents.
- Captions are all lowercase, including words like `3d`. Write them lowercase in `src/data/projects.js`; do not rely on CSS `text-transform`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use `npm run build` as the main verification check after code or content changes that affect the app.

## Routes

- `/` renders `Home`.
- `/projects` renders the project index and reads the optional `category` query parameter.
- `/projects/:slug` renders project details. Unknown slugs redirect to `/projects`.
- `/about` renders profile, experience, skills, and contact content.

## Editing Checklist

- When adding a project, make the `slug` unique and keep its `category` aligned with `filters`.
- When renaming a category, update `filters`, project entries, and any links or query-param compatibility code.
- When changing profile/contact text, update `src/data/profile.js`; the footer and about page both read from it.
- When adding served images, verify the final path under `public/images/` matches the string used in project data.

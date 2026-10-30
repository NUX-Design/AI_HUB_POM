# AI Hub POM

React + Vite + Tailwind CSS implementation of the AI Hub Stitch screen, with product planning documents and the exported source reference.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Project map

- `src/` — React page components and section layouts
- `output/stitch/` — source screen HTML and image export
- `PRD.md`, `DESIGN.md`, and requirement documents — product and design context
- `A11Y.md`, `REPORT.md`, and `references/` — accessibility standard and current verification record

The source design's logo URL returned an authentication page, so the page currently uses the text wordmark. Accessibility checks remain conditional pending human keyboard, screen-reader, zoom, and reduced-motion review.

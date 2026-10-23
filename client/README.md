# Call for Civility – client

React app built with [Vite](https://vite.dev) and [Tailwind CSS v4](https://tailwindcss.com).

## Scripts

### `npm start`

Runs the Vite dev server at [http://localhost:3001](http://localhost:3001). Requests to `/api` are proxied to the Express server on port 3000.

### `npm run build`

Builds the app into `build/`, which `server/server.js` serves in production.

### `npm run preview`

Serves the production build locally for a quick check.

### `npm run deploy`

Builds and publishes `build/` with `gh-pages`.

## Notes

- Static files (images, favicon, robots.txt) live in `public/` and are served from the site root, e.g. `/img/logo.png`.
- Tailwind theme overrides (font sizes, fonts) are in the `@theme` block in `src/index.css`.

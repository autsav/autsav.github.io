# autsav.github.io

My personal portfolio site — an animated single-page portfolio built with Gatsby.

🔗 **Live:** [autsav.github.io](https://autsav.github.io)

## Built with

- [Gatsby](https://www.gatsbyjs.com/) with the [`@lekoarts/gatsby-theme-cara`](https://github.com/LekoArts/gatsby-themes) animated one-page theme
- React · Theme UI · MDX (content) · React Helmet (SEO)
- Plugins: PWA/offline, manifest, Google Analytics, Netlify
- Deployed to **GitHub Pages** (`gh-pages` branch)

## Getting started

```bash
npm install
npm run develop        # local dev at http://localhost:8000
```

### Scripts

| Command | Description |
|---|---|
| `npm run develop` | Gatsby dev server |
| `npm run build` | Production build (`public/`) |
| `npm run serve` | Serve the production build |
| `npm run clean` | Clear the Gatsby cache |
| `npm run deploy` | Build with path prefix and publish to `gh-pages` |

## Editing content

Section content (intro, projects, about, contact) lives in the `src/` MDX/Theme-UI
overrides of `gatsby-theme-cara`. Edit those to update the site.

## Deployment

`npm run deploy` builds the site and pushes `public/` to the `gh-pages` branch, which
serves [autsav.github.io](https://autsav.github.io).

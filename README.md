# Fathomage Software - Public Website

Built with the [Astro](https://astro.build) static site generator.

Based on the [Positivus theme](https://astro.build/themes/details/positivus/).

## Theme Features

Leveraging the power of Astro and Tailwind CSS:

- Clean and modern design.
- SEO-friendly.
- Multiple Layouts.
- Seamless Navigation.
- Pre-built Sections.
- Customizable Components.
- Mobile-Responsiveness.

## 🚀 Project Structure

The project is built using Astro.js and Tailwind CSS. Here's a quick look at the project structure:

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./docs/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

The site is deployed with GitHub Pages, based on the `/docs` directory.
Therefore `./docs` is set as the build directory in `astro.config.mjs`

Note that GitHub Pages will ignore the `_astro` directory unless [a `.nojekyll` file is present](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/).

For domain configuration, refer to:
https://deanattali.com/blog/multiple-github-pages-domains/

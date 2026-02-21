# Minjucks

Version 1.0.0

## What is minjucks?

Minjucks is a minimal static site generator (no Markdown) with nunjucks templating, frontmatter, PostCSS stylesheet processing, and CSSNANO minification.

## Installation

In the terminal, `yarn istall` will brings in all the `node_modules/` required.

## Scripts

* `yarn dev` for development with Browser-Sync.

* `yarn clean` empties the `public/` folder.

* `yarn build` just builds.

## Notes

Everything ends up in the `public/` folder for you to deploy:

* `src/pages` nunjuck files are used to build HTML files (pretty URLs). You can nest pages in folders, and your folder structure will also be replicated in the publif folder.

* Frontmatter data in your pages nunjuck files (using the gray-matter plugin) is used for `page.title` and `page.description` and to select which layout template the page will wear. Minjucks comes with only `layout.njk` ut you can create more.

* Site title, description, version, and author are in `src/data/metadata.json`

* PostCSS imports CSS partials into `styles.css`. CSSNANO minifies it. This one CSS file goes to your site.

* For demonstration purposes:
  * Simple site CSS is included. Start here or delete and start over, do whatever you like. `build.js` expects your base CSS file to be `source/css/styles.css` – you can change that.
  * The plain JS `source/js/scripts.css` is a switcher that shows how the CSS light and dark theme works. If you don’t want it, you can delete it.

* Other CSS (e.g. 3rd party framework), JS, images, and fonts are simply passed through (copied) without processing, each in their folders. You can add more folder/file types in `build.js` Any files you put in the `source/` root are also simply passed through to the `public/` root.

## Folder/file structure

```txt
minjucks/
├── src/
│   ├── _includes/        ← layouts & partials
│   │   └── layout.njk
│   ├── css/
│   │   ├── other/
│   │   │    └── …        ← pass-thorugh CSS
│   │   ├── styles.css
│   │   └── …
│   └── data/             ← sitewide data
│   │   └── metadata.json
│   └── js/               ← pass-though js
│   │   └── main.js
│   └── img/              ← pass-thorugh images
│   │   └── logo.svg
│   └── pages/
│       └── index.njk
├── public/               ← built output
├── dev.js
├── build.js
├── postcss.config.js
└── package.json
```

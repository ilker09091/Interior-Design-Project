# Interior Design Project — Premium Living (Frontend / UI Design)

**Live Demo:** [`https://warm-vacherin-e145b0.netlify.app/`](https://warm-vacherin-e145b0.netlify.app/)

---

## Screenshot

![Homepage Preview](./screenshot.png)

---

## Overview

**Interior Design Project** is a modern and elegant architecture/interior design showcase website built using **React + Vite**. This is a **frontend-only (UI)** project that demonstrates design layout, gallery presentation, and contact section. No backend or form handling logic is included — the focus is on clean visuals, responsiveness, and layout structure.

## Features

- Fast development environment powered by **Vite**
- Component-based structure using **React**
- **Responsive** layout (desktop & mobile)
- Gallery, Services, and Contact sections
- Ready for easy deployment (Vercel, Netlify, GitHub Pages)

## Technologies

- **React**
- **Vite**
- **Tailwind CSS** _(or any CSS framework of your choice)_
- _(Optional)_ React Router, Framer Motion, etc.

> Note: Update this list according to your setup if you are not using Tailwind CSS.

## Getting Started — Run Locally

Make sure **Node.js (>=16)** is installed on your machine.

```bash
# clone the repository
git clone https://github.com/ilker09091/Interior-Design-Project.git
cd Interior-Design-Project

# install dependencies
npm install

# start the development server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

## Deployment Options

You can easily deploy this project to any static hosting provider:

- **Vercel** — Connect your GitHub repository and it will auto-build (React + Vite ready)
- **Netlify** — Build command: `npm run build`, Publish directory: `dist`
- **GitHub Pages** — Install `gh-pages`, run `npm run build` and publish `/dist` folder

> Demo link already added at the top of this README.

## Folder Structure

```
/public        # static assets
/src
  /assets
  /components  # header, footer, gallery, form, etc.
  /pages
  main.jsx
  App.jsx
/package.json
vite.config.js
```

## Customization

- Update theme colors in `tailwind.config.js` or your global CSS variables.
- Centralize contact information (address, phone, socials) in a config file for easier updates.
- To make the contact form functional, connect it to an API or use Netlify/Vercel functions.

## Accessibility & Performance

- Add descriptive `alt` attributes for all images.
- Optimize images (e.g., `.webp` format, correct sizing).
- Test and optimize with **Lighthouse** for accessibility and performance improvements.

## License

MIT © 2025 Interior Design Project

## Contact

**Project Owner / Contributor:** Interior Design Project
**Address:** Tbilisi, Georgia
**Phone:** +995 595 54 80 80
**Email:** Zygronix.ge

---

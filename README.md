# Mansory Mobilje

Mansory Mobilje is a small showcase website for a custom furniture maker based in Ferizaj, Kosovo. It gives visitors a feel for the workshop’s style, lets them browse finished interiors, and makes it easy to get in touch about a project.

## What’s on the site

- A landing page with an introduction to the brand, its services, and selected work.
- An interactive bed customizer with four bed styles and a range of upholstery colors. Browse with the arrows or swipe on a touch screen.
- A project gallery with detail pages and image carousels.
- Albanian and English text, with the selected language remembered in the browser.
- Contact details and links to the brand’s social pages.

## Built with

The site uses React and TypeScript, with Vite for development and production builds. React Router handles the project detail routes, Lucide supplies the interface icons, and Tailwind CSS is compiled into the production stylesheet by Vite.

## Project layout

- `App.tsx` — page routes and the home page sections
- `components/` — navigation, customizer, gallery, contact, and other page sections
- `data/projects.ts` — project descriptions and gallery images
- `i18n/` — Albanian and English translations and language state
- `assets/images/` — furniture, project, and brand images (raster images are optimized as WebP)

## Hosting note

Project detail pages use client-side routes such as `/project/1`. On a static host, configure a fallback so direct requests to app routes serve `index.html`.

## Contact

Mansory Mobilje is in Ferizaj, Kosovo. You can reach the team at [mansorymobilje@gmail.com](mailto:mansorymobilje@gmail.com), call +383 45 297 275 or +383 48 297 275, or find them on [Instagram](https://www.instagram.com/mansorymobilje/) and [Facebook](https://www.facebook.com/profile.php?id=100087179893870).

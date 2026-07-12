# DN Bau GmbH — Static Website

This repository contains a static, multi-page website for DN Bau GmbH intended for GitHub Pages hosting.

Quick notes:
- Update `sitemap.xml` and `robots.txt` with your production domain before deployment.
- The contact form in `contact.html` is a static form — configure a form endpoint (Formspree, Netlify Forms, or server) to receive messages.
- Logo and hero images live in `img/`.

Deploy to GitHub Pages:

1. Push the repository to GitHub.
2. In repository Settings → Pages, select the `main` branch (or `gh-pages`) and `/ (root)` folder.
3. Ensure `.nojekyll` is present to bypass Jekyll processing.

Checklist before launch:
- Replace placeholder legal texts in `impressum.html` and `datenschutz.html`.
- Update `sitemap.xml` URLs to your domain.
- Optionally add analytics or a server-side form receiver.


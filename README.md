# Sushant Kumar — Product Portfolio

React + Vite + Tailwind. Converted from the previous web-developer portfolio.

## Run

```bash
npm install
npm run dev      # local
npm run build    # production build → dist/
```

## Where to edit things

**`src/data/content.js` holds every word on the site.** Change copy there, not in
components. It contains: profile + tagline, the "at a glance" stats, experience,
education, the competency radar values, the toolkit chips, all four case studies,
and the artifacts list.

Anything wrapped in `{{ double braces }}` renders as a yellow highlight on the page.
Those are the places only you can fill in — real numbers, team size, confidential
details to redact. **Search the site for yellow before you publish.**

## Add before publishing

| File | What |
|---|---|
| `public/headshot.jpg` | Your photo. Falls back to an initials monogram if missing. |
| `public/resume.pdf` | Résumé — the navbar button links to `/resume.pdf`. |
| `public/og-image.png` | Link preview image (1200×630). One already exists; replace it. |

## Case studies

Each entry in `caseStudies` is an array of typed blocks:

`h2` `h3` `p` `ul` `ol` `quote` `decision` `table` `note` `diagram`

For tables, prefix the first cell with `__PICKED__` to highlight the option you chose.
For `diagram`, valid names are `mcp`, `vercel`, `clickup` — the SVGs live in
`src/components/Diagram.jsx`. Add new ones there.

## Deploy

Vercel or Netlify: framework preset Vite, build `npm run build`, output `dist`.

## Note on the old contact API

`api/server.js` (express + nodemailer) is untouched but no longer wired up — the
contact section uses a `mailto:` link. Delete it or reconnect it if you want the form back.

# Hoa Nguyen — Portfolio Website

A static, no-build website. Open `index.html` in a browser, or upload the
whole `site` folder to any static host (Netlify, Vercel, GitHub Pages,
your own server).

## How everything is organized

```
site/
├── index.html                 Page structure (rarely needs editing)
├── assets/
│   ├── css/style.css          All visual design (colors, spacing, layout)
│   ├── js/
│   │   ├── config.js          ⭐ ALL EDITABLE CONTENT LIVES HERE
│   │   └── main.js            Renders the page + lightbox from config.js
│   ├── images/
│   │   ├── profile/           Your portrait
│   │   └── gallery/            Real images behind the "Behind the
│   │       ├── userflow/       Interface" lightbox, grouped by stage
│   │       ├── lofi/
│   │       ├── hifi/
│   │       ├── design-system/
│   │       └── final-ui/
│   └── files/                 Downloadable CV (PDF)
└── README.md                  This file
```

There are no internal case-study pages and no hidden data files —
`config.js` is the only place content lives.

## The one file you'll edit 90% of the time: `assets/js/config.js`

Everything in `SITE` is plain text/data — no HTML or layout code. Open
it in any text editor.

### Change your portrait, title, or bio
Edit `SITE.profile` (portrait path, name, tagline, description, stats,
location, email, phone, links, CV file path).

### Change / add / remove a Selected Project card
Edit the `SITE.featuredProjects` array. Every card links straight to a
real Behance project URL in a new tab — there is no other project type.
Each entry needs:
- `thumbnail` — the real Behance cover image URL (or a local path under
  `assets/images/` if you'd rather host it yourself)
- `link` — the real `behance.net/gallery/...` URL for that project

Only add projects that are actually published on your Behance profile
(https://www.behance.net/hoa231) — don't point `link` at anything else.
To remove a project, delete its object. To reorder, move the object up
or down in the array.

### Change the "More Projects" strip
Edit `SITE.moreProjects` — same shape as `featuredProjects` (title,
thumbnail, link), all pulled from your live, published Behance work.

### Change the "Behind the Interface" galleries
Edit `SITE.behindInterface.steps`. Each of the 5 stages (User Flow,
Low-fidelity Wireframe, High-fidelity Wireframe, Design System, Final
UI) has:
- `image` — the small preview shown on the card face
- `gallery` — an array of `{ src, caption }` shown in the lightbox when
  the card (or "View more details") is clicked. Add or remove entries
  freely — the lightbox's Prev/Next/counter adapts automatically.

All gallery images are real uploads (UX research files, wireframes,
Figma design-system exports, and finished UI screens) — nothing here
is generated.

### Change skills
Edit `SITE.skills.groups` — each group is a title + icon + list of items.

### Change experience
Edit `SITE.experience.roles` — add/remove/reorder role objects freely.
`current: true` selects that role's detail panel by default. The
section renders as a compact clickable timeline on the left and a
detail panel on the right — clicking any timeline entry swaps the
right-hand panel to that role.

### Change process steps ("From Insight to Impact")
Edit `SITE.process.steps`. Icon names come from the small icon set
defined at the top of `assets/js/main.js` (`search`, `share-2`,
`pen-tool`, `bar-chart-2`, `users`, `layers`, `bar-chart`, `user`, `tool`).

## Swapping images
Every image referenced in `config.js` is just a path or URL. To replace
a local image, either overwrite the file at that path with a new image
of the same name, or save your new image under a new name and update
the path in `config.js`.

## Notes on sourcing (nothing here is generated)
- The portrait is extracted from your CV at full resolution.
- All 3 featured projects and all 8 "More Projects" cards link to real,
  published, verified Behance project URLs, with cover images pulled
  directly from Behance's own CDN for that exact project.
- "Behind the Interface" gallery images are real crops from your
  uploaded UX research files, low/high-fidelity wireframes, Figma
  design-system exports, and finished UI screens — 18 images total
  across the 5 stages, deliberately pulled from different projects
  since the section is about your process in general, not one project
  end-to-end.

# Reference / Figma exports

This folder holds the original Figma artefacts. **They are excluded from the Astro build** (see `tsconfig.json` exclude + Astro only scans `src/`).

Use them as visual reference only — do **not** import them. Each section of the site is rebuilt as a reusable Astro component under `src/components/`.

## `figma-css/`
- `W_1920.css`, `W_1280.css`, `W_768.css`, `W_360.css` — pixel-accurate Figma CSS dumps per breakpoint.

## `figma-components/`
- `button/` — 12 button variant CSS files. Consolidated into `src/components/atoms/Button.astro` (`variant` + `size` props).
- `colors/colorcode.css` — brand palette. Migrated to CSS variables in `src/styles/global.css` and to `tailwind.config.mjs`.
- `typography/` — phone/tablet/desktop type CSS. Migrated to `.type-h1 / .type-h2 / .type-p1 / ...` classes in `src/styles/global.css`.
- `otf-fonts/` — original OTF font files. Used WOFF/TTF versions in `public/fonts/`. Convert TTF → WOFF2 later for production.

## Architecture pattern (mirrors alchemy.zuerich)
```
src/
├── components/
│   ├── atoms/        ← Button, Heading, Text, Icon
│   ├── molecules/    ← Card, ServiceCard, FaqItem (add as needed)
│   ├── organisms/    ← Hero, Navigation, Footer (add ServicesGrid, AboutSection…)
│   ├── layouts/      ← BaseLayout
│   └── templates/    ← page wrappers
├── pages/            ← file-based routes
├── styles/global.css ← @font-face + tokens + .type-* + .btn--*
└── lib/ data/ scripts/
```

## BEM convention used in scoped styles
- **Block** = component name (`.nav`, `.hero`, `.footer`)
- **Element** = `block__element` (`.nav__pill`, `.hero__cta`)
- **Modifier** = `block--modifier` or state class (`.nav__link--active`, `.is-open`)
- **Tailwind** is used for layout utilities (`flex`, `grid`, responsive `md:`/`lg:`), not for component identity.

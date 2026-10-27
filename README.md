# SignalNest

## 1. Overview

SignalNest is a single-page marketing site for a fictional customer-feedback intelligence SaaS. It is designed for product teams that want to turn support, sales, review, and in-product feedback into a clearer roadmap. The repository is a frontend-only MVP: all content is local, there is no backend, and the home page is the only application route.

- Conversion-focused hero with a product-pulse dashboard mockup.
- Responsive navigation with a mobile menu.
- Feature, customer proof, pricing, FAQ, and demo CTA sections.
- Client-side monthly/yearly pricing toggle across Studio, Scale, and Enterprise plans.
- Animated FAQ expansion and a “Demo only” toast for the watch-video button.

## 2. Tech stack

- **Next.js 15 App Router** — Provides the application runtime and the `/` route. The root layout and page are in `app/layout.tsx` and `app/page.tsx`.
- **React 18** — Powers the client-side state for the mobile menu, pricing toggle, FAQ accordion, and demo toast.
- **TypeScript** — Provides strict type checking. The `npm run lint` script runs `tsc --noEmit`.
- **Tailwind CSS v4** — Styles layout, responsive breakpoints, typography, spacing, borders, and states directly in `app/page.tsx`.
- **Tailwind PostCSS plugin** — Compiles Tailwind CSS through `postcss.config.mjs`.
- **Framer Motion** — Animates FAQ answer height and opacity in `app/page.tsx`.
- **lucide-react** — Provides the menu, close, arrow, check, play, sparkle, and chevron icons used on the page.
- **next/font** — Loads Inter for body/interface text and Space Grotesk for display text in `app/layout.tsx`.
- **Zod, React Hook Form, and `@hookform/resolvers`** — Present in `package.json`, but not currently imported. There are no forms or Zod schemas in this repository.

## 3. Getting started

### Prerequisites

- Node.js compatible with Next.js 15.
- npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

### Check the TypeScript project

```bash
npm run lint
```

Despite the script name, `npm run lint` currently runs `tsc --noEmit`; there is no ESLint configuration in the repository.

## 4. Project structure

```text
project-1-signalnest/
├── app/
│   ├── globals.css       # Global styles, CSS variables, and Tailwind v4 theme mappings
│   ├── layout.tsx        # Root HTML layout, Google fonts, and metadata
│   └── page.tsx          # Complete home page, local content, and client-side interactions
├── next.config.ts        # Next.js configuration; currently uses the default config
├── next-env.d.ts         # Next.js type declarations
├── package.json          # Scripts and dependencies
├── postcss.config.mjs    # Tailwind CSS v4 PostCSS plugin setup
├── README.md             # This guide
└── tsconfig.json         # Strict TypeScript compiler settings
```

There are currently no `components/`, `lib/`, `data/`, or `public/` directories. The `features`, `questions`, and `plans` mock data arrays are defined at the top of `app/page.tsx`.

## 5. How it works

### Routing and page organization

This is a one-route App Router project. `app/layout.tsx` wraps the page, sets `lang="en"`, loads fonts, and exports the page title and description. `app/page.tsx` renders `/` and uses hash links for the Product, Pricing, FAQ, and Contact sections. There are no additional route files.

### Page state and interactions

`app/page.tsx` is marked `"use client"` because it owns four pieces of state:

- `annual` selects monthly or yearly prices. The pricing buttons call `setAnnual`, and each plan reads either its `monthly` or `yearly` value from the local `plans` array. Enterprise intentionally displays `Custom` in both modes and links to the demo email address.
- `open` stores the selected FAQ index. Clicking an open question closes it; clicking another question switches the open answer.
- `menu` controls the mobile navigation panel and is exposed through `aria-expanded` on the menu button.
- `toast` controls the temporary “Demo only” message shown when the watch-video button is pressed. A timeout clears the message after three seconds.

The customer logo strip is generated from a local array of names and rendered as inline SVG wordmarks. The dashboard preview, stats, testimonials, and section copy are static JSX.

### Forms and validation

There is no form flow in the current codebase. The final CTA and Contact footer link use `mailto:hello@signalnest.example`; no Zod schema, React Hook Form hook, API request, or `lib/` directory exists.

### FAQ animation

The FAQ answer is rendered inside `AnimatePresence` and `motion.p`. Its height and opacity animate when the corresponding question index opens or closes.

### Theming and design tokens

The raw visual tokens live in `app/globals.css` as CSS custom properties. The `@theme inline` block exposes them as Tailwind utilities such as `bg-violet`, `text-muted`, `border-line`, and `rounded-card`. The page uses those semantic token utilities rather than defining component-level hex colors.

## 6. Design system

The tokens are defined in `app/globals.css`:

| CSS variable | Value | Purpose |
|---|---:|---|
| `--ink` | `#111827` | Primary text and dark surfaces |
| `--violet` | `#7c3aed` | Brand accent and primary CTA |
| `--lavender` | `#ede9fe` | Soft feature and CTA backgrounds |
| `--mint` | `#a7f3d0` | Positive/accent treatment on dark surfaces |
| `--warm` | `#fafaf9` | Main page background |
| `--muted` | `#64748b` | Secondary text |
| `--line` | `#e7e5e4` | Borders and dividers |
| `--radius` | `18px` | Shared card radius exposed as `rounded-card` |

Typography is loaded with `next/font/google` in `app/layout.tsx`:

- **Inter** is assigned to `--font-inter` and used for body and interface text.
- **Space Grotesk** is assigned to `--font-space` and used through `font-display` for the wordmark, headings, metrics, and card titles.

The `@theme inline` declaration maps these variables to Tailwind color, radius, and font utilities.

## 7. Customizing

- **Marketing copy** — Edit the section JSX in `app/page.tsx`.
- **FAQ content** — Update the `questions` array near the top of `app/page.tsx`.
- **Feature cards** — Update the `features` array, including its semantic background class.
- **Pricing** — Update the `plans` array. Change `monthly`, `yearly`, descriptions, features, or `action` values without changing the toggle logic.
- **Logo strip** — Change the names in `LogoStrip`; the current implementation renders text inside inline SVG wordmarks rather than loading image assets.
- **Colors, fonts, and radius** — Edit the variables and `@theme inline` mappings in `app/globals.css`. Prefer adding semantic tokens there instead of putting new hex values in JSX.
- **Global interaction states** — Update the `button:focus-visible`, `a:focus-visible`, and active rules in `app/globals.css`.
- **Add a page** — Create an App Router directory such as `app/security/page.tsx`, then add a real navigation link from `app/page.tsx`.
- **Extract components or data** — Create `components/` for reusable UI and `data/` for typed content if the single page becomes difficult to maintain. They do not exist yet.

## 8. Accessibility and SEO notes

Implemented:

- Root document has `lang="en"`.
- `app/layout.tsx` exports a title and description through Next.js metadata.
- Semantic `nav`, `section`, `footer`, headings, buttons, and links are used.
- Menu and FAQ controls are native buttons and can be activated with the keyboard.
- The mobile menu exposes `aria-expanded`; the menu button has an accessible label.
- FAQ buttons expose `aria-expanded`.
- The temporary demo message uses `role="status"`.
- Global `:focus-visible` outlines and active states are defined in `globals.css`.
- CTA and navigation links use real hash, email, or page-section targets.

Not currently implemented:

- Open Graph and Twitter card metadata.
- A real contact/demo form or server submission.
- Skip navigation, custom focus styling per component, or automated accessibility tests.
- External image alt text, because the product preview and logo strip are HTML/SVG rather than image files.

## 9. Possible next steps

- Extract the large `app/page.tsx` into focused components such as `Hero`, `Pricing`, `Faq`, and `Footer`.
- Add dedicated `/pricing`, `/security`, and `/contact` routes if the site needs deeper content.
- Replace the `mailto:` CTA with a React Hook Form + Zod validated demo request flow, then connect it to an API.
- Add Open Graph/Twitter metadata, favicon assets, and a social preview image.
- Move local arrays into typed modules under `data/` as the content set grows.
- Add automated accessibility checks and end-to-end tests for the menu, pricing toggle, FAQ, and toast.
- Add a real logo asset system if the customer wordmarks need to use brand artwork instead of inline text.

## Vercel deployment

This repository is configured for Vercel with `vercel.json`. Import the repository in Vercel, keep the framework set to **Next.js**, and use the project root as the deployment root. Vercel will run `npm ci` to install dependencies and `npm run build` to create the production deployment. Node.js 20 or newer is declared in `package.json`.

# OpenCode Agent Instructions

## Stack & Architecture
- **Framework:** Astro (Static Site Generation by default) with `@astrojs/react` and `@astrojs/mdx`.
- **Styling:** Tailwind CSS **v4** (via `@tailwindcss/vite`) + Shadcn/ui.
- **Directories:** 
  - `src/pages/`: Astro routing entrypoints.
  - `src/layouts/`: Base HTML structures (contains critical Dark Mode inline scripts).
  - `src/components/ui/`: React-based Shadcn components.
  - `src/styles/global.css`: Central Tailwind v4 configuration and CSS variables.

## Crucial Framework Quirks

### Tailwind v4 & Shadcn/ui
- **NO `tailwind.config.js`:** This project uses Tailwind v4 via Vite. Do not attempt to create or modify a Tailwind config file.
- **CSS Configuration:** All theme variables and mapping are done in `src/styles/global.css` using `:root`, `.dark`, and `@theme inline` blocks.
- **Color Variables:** Colors in `global.css` must be wrapped in `hsl(...)` (e.g., `--background: hsl(0 0% 4%);`).
- **Adding Components:** Use `npx shadcn@latest add <component>`. `components.json` is already configured for v4 (`"config": ""`). 

### Astro + React (Islands)
- Interactive Shadcn UI components (React) used inside `.astro` files **must** have client directives (e.g., `<Button client:load />` or `client:idle`) to execute JavaScript on the browser. Without this, they render as static HTML.

### Dark Mode
- Dark mode state is stored in `localStorage` under the key `vite-ui-theme`.
- To prevent FOUC (Flash of Unstyled Content), an inline script exists in `src/layouts/Layout.astro`. Do not remove it.
- State management for React components is handled by `src/components/ThemeProvider.tsx`.

## Commands
- **Dev Server:** `npm run dev` (Requires Node.js >= 22.12.0)
- **Build:** `npm run build` (outputs to `dist/`)
- **Add Integration:** `npx astro add <integration>`

## Deployment
- Deployed on **Vercel** (`https://portafolio-astro-sebitax.vercel.app/`).
- Rely on standard Astro build commands; Vercel handles the SSG output automatically.

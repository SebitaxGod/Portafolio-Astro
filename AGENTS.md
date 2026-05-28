# OpenCode Agent Instructions

## Stack & Architecture
- **Framework:** Astro (Static Site Generation) with `@astrojs/react` and `@astrojs/mdx`.
- **Styling:** Tailwind CSS **v4** (`@tailwindcss/vite`) + Shadcn/ui.
- **Directories:** 
  - `src/pages/`: Astro routing entrypoints.
  - `src/layouts/`: Base HTML structures (contains critical Dark Mode inline scripts & SEO JSON-LD).
  - `src/components/ui/`: React-based Shadcn components.
  - `src/styles/global.css`: Central Tailwind v4 configuration and CSS variables.

## Crucial Framework Quirks

### Tailwind v4 & Shadcn/ui
- **NO `tailwind.config.js`:** This project uses Tailwind v4 via Vite. Do not attempt to create or modify a Tailwind config file.
- **CSS Configuration:** All theme variables and mapping are done in `src/styles/global.css` using `:root`, `.dark`, and `@theme inline` blocks.
- **Color Variables:** Colors in `global.css` must be wrapped in `hsl(...)` (e.g., `--background: hsl(0 0% 4%);`).
- **v4 Syntax Constraints:** Do NOT use v3 arbitrary values if a v4 native utility exists. Use `bg-linear-to-*` (not `bg-gradient-to`), spacing multipliers like `w-75` (not `w-[300px]`), `bg-size-[...]` (not `bg-[size:...]`), and `grow` (not `flex-grow`).
- **Adding Components:** Use `npx shadcn@latest add <component>`. `components.json` is already configured for v4 (`"config": ""`). 

### Astro + React (Islands) & Asset Handling
- **Hydration:** Interactive Shadcn UI components (React) used inside `.astro` files **must** have client directives (e.g., `<Button client:load />` or `client:idle`) to execute JavaScript on the browser. Without this, they render as static HTML.
- **Props (className vs class):** When passing classes to a React component inside an `.astro` file, strictly use `className="..."` (not `class="..."`) to ensure `cn()` utilities within Shadcn correctly merge the styles.
- **Icon Imports:** DO NOT import `lucide-react` icons directly into `.astro` files (causes ESM/CommonJS conflicts). Use inline SVGs in `.astro` files, or wrap `lucide-react` icons inside a `.tsx` component first.
- **Images:** All images must be placed in `src/assets/` and rendered using Astro's native `<Image src={import} />` component from `astro:assets` to ensure automatic web optimization.

### Dark Mode & SEO
- Dark mode state is stored in `localStorage` under the key `vite-ui-theme`.
- To prevent FOUC (Flash of Unstyled Content), an inline script exists in `src/layouts/Layout.astro`. Do not remove it.
- State management for React components is handled by `src/components/ThemeProvider.tsx` and toggled via `ThemeToggle.tsx`.
- View Transitions are enabled via `<ClientRouter />` in the main layout.

## CI/CD & Automation
- **GitHub Actions:** CI pipeline runs on `main` pushes/PRs (Node 22, `npm ci`, `npm audit`, `npm run build`). Do not push code that fails the build step.
- **Dependabot:** Configured to update NPM packages and Actions weekly.

## Commands
- **Dev Server:** `npm run dev` (Requires Node.js >= 22.12.0)
- **Build:** `npm run build` (outputs to `dist/`)
- **Add Integration:** `npx astro add <integration>`

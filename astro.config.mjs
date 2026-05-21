import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portafolio-astro-sebitax.vercel.app',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});

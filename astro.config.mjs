import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vitalunarisk.ch',
  integrations: [tailwind(), mdx()],
});

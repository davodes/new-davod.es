import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import critical from 'rollup-plugin-critical';

export default defineConfig({
  site: 'https://davod.es',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        plugins: [
          critical({
            criticalUrl: 'https://new-davod-es.vercel.app', // o 'http://localhost:3000' en dev
            criticalBase: './dist/',
            criticalPages: [
              { uri: '', template: 'index' }, // Home
              { uri: 'contacto', template: 'contacto/index' }, // otra página
            ],
            criticalConfig: {
              inline: true,   // CSS crítico inline
              extract: true,  // resto del CSS en archivo separado
              width: 1200,
              height: 1200,
              minify: true,
            },
          }),
        ],
      },
    },
  },
});
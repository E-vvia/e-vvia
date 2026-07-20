// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Fot Yuruka Std',
      cssVariable: '--font-fot-yuruka-std',
      options: {
        variants: [{
          src: ['./src/assets/fonts/fot-yuruka-std.ttf'],
          weight: 'normal',
          style: 'normal'
        }]
      }
    }
  ]
});
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import { configDefaults } from 'vitest/config';

const certFile = 'certs/local.pem';
const keyFile = 'certs/local-key.pem';

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'My Awesome PWA App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
    }),
  ],
  server: {
    host: 'local.ingresse.com',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, keyFile)),
      cert: fs.readFileSync(path.resolve(__dirname, certFile)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude, 'node_modules/', 'dist/'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});

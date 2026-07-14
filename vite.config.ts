import { defineConfig } from 'vite';
import { resolve } from 'path';

// Vite configuration for Super RSS Feed
export default defineConfig({
  base: '/rssfeed/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});

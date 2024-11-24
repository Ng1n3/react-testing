import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.js',
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    include: ['**/*.{test,spec}.{js,jsx}'],
  }
});

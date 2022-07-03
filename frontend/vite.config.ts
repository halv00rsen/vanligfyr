import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  server: {
    proxy: {
      // Local proxy to function "user"
      '/user': 'http://localhost:5000',
    },
  },
});
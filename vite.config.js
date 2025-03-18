import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/yuhan-portfolio', // Keep base path if deployed to a subdirectory
  server: {
    // Proxy configuration for local development (only needed for local dev)
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    // Custom build settings if necessary
    outDir: 'dist', // Can define your build output directory here
  },
});
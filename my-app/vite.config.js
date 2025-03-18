import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {  // ✅ All requests to /api will be forwarded
        target: "http://localhost:5001",  // ✅ Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // ✅ Remove "/api" prefix
      },
    },
  },
});

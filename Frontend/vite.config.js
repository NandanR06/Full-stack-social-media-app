import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Your backend server
        changeOrigin: true,  // Ensures that the request's Host header is modified
        secure: false,  // If you're using HTTP and not HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''),  // Optional: remove /api prefix before forwarding
      },
    },
  },
});

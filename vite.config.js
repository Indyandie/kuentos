import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Resolve alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Configure server options if necessary
  server: {
    // Server-specific configurations
  },
  // Global CSS (including Tailwind)
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@/styles/tailwind.css";`
      }
    }
  },
  // Build options
  build: {
    // Build-specific configurations
  },
  // Plugins (add plugins like React or Vue if you're using them)
  plugins: [
    // ... Any required plugins
  ]
});

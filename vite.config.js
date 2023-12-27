import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  // Resolve alias
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
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
    // Build-specific configuratsions
    lib: {
      entry: (__dirname, 'src/main.js'),
      name: 'Kuentons',
      // formats: ['es', "umd" ], // Choose formats as needed
      fileName: (format) => `kuentos.${format}.js`
    }
  },
  // Plugins (add plugins like React or Vue if you're using them)
  plugins: [
    // ... Any required plugins
  ]
});

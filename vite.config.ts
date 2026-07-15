import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    // Split long-lived vendor code into its own chunks (browser build only —
    // the SSR prerender bundle treats react as external): content edits no
    // longer invalidate the React/Framer Motion cache for repeat visitors,
    // and the browser fetches the pieces in parallel.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom'],
              'vendor-motion': ['framer-motion'],
            },
          },
        },
  },
}));

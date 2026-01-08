/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "swiper"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["swiper/react", "swiper/modules"],
  },
  server: {
    proxy: {
      "/api": "https://auxry-store.onrender.com", // If applicable
    },
  },
});

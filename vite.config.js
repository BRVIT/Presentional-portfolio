// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});

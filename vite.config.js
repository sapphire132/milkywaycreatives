// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "/milkywaycreatives/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  // ... other configurations
});

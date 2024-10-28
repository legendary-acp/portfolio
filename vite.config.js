import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer({
    template: 'treemap',
    filename: 'stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  })
],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
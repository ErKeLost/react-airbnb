import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// https://vitejs.dev/config/
const resolve = (url) => path.resolve(__dirname, url);
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [react()],
});

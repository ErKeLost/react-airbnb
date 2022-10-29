import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import Icons from "unplugin-icons/vite";
// https://vitejs.dev/config/
const resolve = (url) => path.resolve(__dirname, url);
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://codercba.com:1888/airbnb/api",
        changeOrigin: true,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    react(),
    Icons({
      compiler: "jsx",
      customCollections: {
        // custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`),
      },
      scale: 1,
      defaultClass: "inline-block",
      autoInstall: true,
    }),
  ],
});

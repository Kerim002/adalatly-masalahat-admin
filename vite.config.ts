import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5175,
    cors: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        // target: "http://192.168.100.242:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

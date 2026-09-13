import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    // Local dev: forward /api to the lightweight dev proxy (scripts/dev-proxy.mjs).
    // In production Vercel serves /api from the serverless function in api/.
    proxy: {
      "/api": process.env.CHAT_PROXY_URL ?? "http://localhost:8787",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

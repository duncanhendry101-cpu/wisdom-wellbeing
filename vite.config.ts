import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  /* ADD THIS BLOCK RIGHT HERE */
  optimizeDeps: {
    include: ["react-router-dom", "react-router", "react", "react-dom"],
  },
});

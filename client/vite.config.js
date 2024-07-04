import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user": "rudra-backend-git-main-adityas-projects-a46e79b7.vercel.app/",
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import vike from 'vike/plugin'
import path from "path"
import { execSync } from "node:child_process";

const buildId = execSync("git rev-parse --short HEAD").toString().trim();

export default defineConfig({
  define: {
    __BUILD_ID__: JSON.stringify(buildId),
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), vike()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

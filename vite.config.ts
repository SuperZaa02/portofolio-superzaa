import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import path from "path";
import { execSync } from "node:child_process";

const BUILD_ID = execSync("git rev-parse --short HEAD").toString().trim();
const BUILD_TIME = new Date().toISOString();
const NODE_ENV = process.env.NODE_ENV || "development";
const NODE_VERSION = process.version;
const GIT_BRANCH = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const LAST_COMMIT_MESSAGE = execSync("git log -1 --pretty=%s").toString().trim();
const LAST_COMMIT_DATE = execSync("git log -1 --format=%cd --date=iso").toString().trim();

export default defineConfig({
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
    __BUILD_TIME__: JSON.stringify(BUILD_TIME),
    __NODE_ENV__: JSON.stringify(NODE_ENV),
    __NODE_VERSION__: JSON.stringify(NODE_VERSION),
    __GIT_BRANCH__: JSON.stringify(GIT_BRANCH),
    __LAST_COMMIT_MESSAGE__: JSON.stringify(LAST_COMMIT_MESSAGE),
    __LAST_COMMIT_DATE__: JSON.stringify(LAST_COMMIT_DATE),
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
});

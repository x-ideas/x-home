import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

// import { dirname, resolve } from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [sveltekit()],
});

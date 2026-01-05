// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Site configuration for GitHub Pages
const site = process.env.SITE ?? "https://hmit-uts.github.io";
const base = process.env.BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/Portfolio",
  experimental: { assets: true, viewTransitions: true },
  integrations: [tailwind()],
});

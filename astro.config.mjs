import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: "codeblog/",
  site: "https://leotg.com/codeblog",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({ filter: (page) => page !== "https://leotg.com/about" }),
  ],
});

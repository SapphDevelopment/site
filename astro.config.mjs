import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/discord": "https://discord.gg/75QR5duadJ",
    "/paypal": "https://paypal.me/sapphiredevs",
    "/github": "https://github.com/sapphiredevs",
    "/kofi": "https://ko-fi.com/duckodas",
  },
  integrations: [
    starlight({
      title: "Sapphire Development",
      social: {
        github: "https://github.com/sapphiredevs",
        discord: "https://discord.gg/75QR5duadJ",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

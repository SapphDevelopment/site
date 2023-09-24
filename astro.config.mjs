import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/kofi": "https://ko-fi.com/sapphiredev",
    "/discord": "https://discord.gg/75QR5duadJ",
    "/community": "https://discord.gg/gAb25kkRQj",
    "/paypal": "https://paypal.me/sapphiredevs",
    "/github": "https://github.com/SapphDevelopment",
    "/projectdiscord": "https://github.com/projectdiscord",
  },
  integrations: [
    starlight({
      title: "Sapphire Development",
      social: {
        github: "https://github.com/SapphDevelopment",
        discord: "https://discord.gg/75QR5duadJ",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start", collapsed: false },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

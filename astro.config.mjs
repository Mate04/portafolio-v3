// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  i18n:{
    locales:['es','en'],
    defaultLocale:'es',
    routing:{
      prefixDefaultLocale:true,
      redirectToDefaultLocale:true
    }
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon()],
});

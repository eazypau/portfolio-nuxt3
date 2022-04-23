import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Web developer portfolio | Front End Developer",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Personal Portfolio Website. I'm a Front-End Web Developer. Currently focused on developing website using Vue. Checkout my projects and github repositories" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Po Yi Zhi" },
      {
        name: "keywords",
        content:
          "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Self Taught, Po Yi Zhi, Yi Zhi, Po YZ, YZ Po, yzpo, eazypau",
      },
      {
        property: "og:site_name",
        content: "Web developer portfolio | Front End Developer",
      },
      {
        property: "og:site",
        content: "https://www.eazypau.com/",
      },
      {
        property: "og:title",
        content: "Web developer portfolio | Front End Developer",
      },
      {
        property: "og:description",
        content: "Personal Portfolio Website. I'm a Front-End Web Developer. Currently focused on developing website using Vue. Checkout my projects and github repositories", // todo need to update the description
      },
      // sharing thumbmail img
      {
        property: "og:image",
        content: "https://www.eazypau.com/_nuxt/favicon-wb.png", ///favicon-wb.png
      },
    ],
    link: [{ rel: "icon", href: "/favicon-wb.png" }],
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});

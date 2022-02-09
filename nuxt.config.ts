import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Po YZ",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Po YZ's portfolio and blog" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Po Yi Zhi" },
      {
        name: "keywords",
        content:
          "Web Development, Web Developer, Front End Web Developer, Front End, Frontend, Front-end, HTML, CSS, JavaScript, Vue, Junior Web Developer, Software Developer, Software Engineer, Malaysia, Self Taught, Blog, Po, Po Yi Zhi, Yi Zhi, Po YZ, YZ Po",
      },
      {
        property: "og:site_name",
        content: "Po YZ",
      },
      // {
      //   property: "og:site",
      //   content: "https://hackercollective.co/",
      // },
      {
        property: "og:title",
        content: "Portfolio Website",
      },
      {
        property: "og:description",
        content: "Po YZ's portfolio and blog",
      },
      // sharing thumbmail img
      // {
      //   property: "og:image",
      //   content: "/favicon.png",
      // },
    ],
    // todo: add keywords and author in meta
    // todo: update favicon
    // todo: add seo meta tags
    // todo: set og meta tagsss
    link: [{ rel: "icon", href: "/favicon-wb.png" }],
  },
  build: {
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

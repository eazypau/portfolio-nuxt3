module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        tea: "url('/hobbies/tea-cup.webp')",
        blog: "url('/hobbies/myblog.webp')",
        music:
          "url('/hobbies/negative-space-headphones-black-white-corey-blaz.webp')",
        grocer: "url('/hobbies/grocer.webp')",
        journaling: "url('/hobbies/journaling.jpg')",
        programming: "url('/hobbies/programming.jpg')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
      boxShadow: {
        "btm-right": "8px 12px 24px -12px #666565",
        "top-right": "-12px -8px 24px -12px #666565",
      },
    },
  },
};

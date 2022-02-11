module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        tea: "url('https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/07/beverage-blur-cup-370018-1200x875.jpg')",
        blog: "url('/hobbies/myblog.webp')",
        music:
          "url('/hobbies/negative-space-headphones-black-white-corey-blaz.webp')",
        grocer: "url('/hobbies/grocer.webp')",
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
    },
  },
};

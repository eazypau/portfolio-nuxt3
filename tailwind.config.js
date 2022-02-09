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
        blog: "url('/myblog.webp')",
        music: "url('/negative-space-headphones-black-white-corey-blaz.webp')",
        grocer: "url('/grocer.webp')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        'project-card': '12rem',
      },
      // color scheme
      colors: {
        "primary-dark": "#264653",
        "secondary-dark": "#2a9d8f",
        "light": "#e9c46a",
        "light-secondary": "#f4a261",
        "secondary": "#e76f51",
      },
      screens: {
        "iphone": "414px",
        "3xl": "1680px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

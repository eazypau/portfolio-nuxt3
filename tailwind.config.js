module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/header-bg.png')",
        "second-idea": "url('/negative-space-abstract-particle-snow.jpg')",
        'tea': "url('https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/07/beverage-blur-cup-370018-1200x875.jpg')",
        'blog': "url('/myblog.JPG')",
        'music': "url('/negative-space-headphones-black-white-corey-blaz.jpg')",
        'grocer': "url('/grocer.jpg')",
      },
      minWidth: {
        'md': '28rem',
      }
    },
  },
  plugins: [],
};

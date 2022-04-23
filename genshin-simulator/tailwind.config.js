module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu-bg': 'url("/assets/")',
      }
    },
  },
  plugins: [],
}

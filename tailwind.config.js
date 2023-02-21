/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-dark-bg': '#0A0908',
        'main-light-bg': '#FFFFFF',
        'main-color': '#9A814E',

      },
    },
  },
  plugins: [],
}

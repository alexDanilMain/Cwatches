/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-wall': "url('/src/imgs/BackGroundImages/black-wall.png')",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'book-bg': "url('./Assets/Images/image1.png')",
      }
    },
  },
  plugins: [],
}
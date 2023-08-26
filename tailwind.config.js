/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"rgba(41,40,40)",
        secondary:"rgb(55,55,55)",
        lightBlack:"rgb(36,33,33)",
        mattBlue:"rgb(65,95,113)",
        mattPurple:"rgb(87,63,113)",
        mattPink:"rgb(115,63,84)"
      },
      width: {
        '128': '36rem'
      }
    },
    
  },
  plugins: [],
}
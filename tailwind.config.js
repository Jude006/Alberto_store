/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#05020B",
        secondary: "#DAA520",
        myColor: "#f5deb3"

      }
    },
    container:{
      center:"true"
     },
    fontFamily:{
      mont:["montserrat", "sans-serif"],
      display:['Playfair Display', 'serif'],
      Lobster: ['Lobster', 'sans']
    }
  },
  plugins: [],
}
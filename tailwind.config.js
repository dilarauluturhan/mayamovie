/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        '2xl': "1140px" 

      }
    },
    extend: {
      fontFamily: {
        tiltNeon: ['Tilt Neon', 'cursive'],
        dosis: ['Dosis', 'sans-serif']
      },
      colors : {
        'dark-green': '#4BAEA0',
        'light-green': '#B6E6BD',
        'light-yellow': '#F1F0CF',
        'light-pink': '#F0C9C9'
      },
    },
  },
  plugins: [],
}

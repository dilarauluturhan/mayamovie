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
        'dark-orange': '#FF430F',
        'orange': '#FF7B54',
        'light-orange': '#FFB26B'
      },

      spacing: {
        128: '32rem'
      }
    },
  },
  plugins: [],
}

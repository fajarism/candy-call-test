/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'background-mobile': '#FFF7F7',
        'gray-action': '#8080808C',
        'primary-red': '#E12121',
        'black-1': '#1C1D20'
      },
      fontSize: {
        'title-mobile': '32px'
      },
      lineHeight: {
        'title-mobile': '40.32px'
      },
      colors: {
        'primary-red': '#E12121',
        'black-1': '#1C1D20',
        'gray-action': '#8080808C',
      }
    },
  },
  plugins: [],
}


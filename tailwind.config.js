/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#512EB7', // rich purple
        secondary: '#A68BFF', // lavendar
        accent: '#FFC700', // yellow
        white: '#FFFFFF', // text
        grey: '#F2F2F2', // background
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
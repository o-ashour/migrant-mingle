/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#512EB7',
        lavendar: '#A68BFF',
        yellow: '#FFC700',
        white: '#FFFFFF',
        grey: '#F2F2F2',
      },
    },
  },
  plugins: [],
}

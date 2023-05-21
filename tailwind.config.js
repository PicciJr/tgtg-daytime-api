/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        tgtg: {
          light: '#71cb9f',
          dark: '#056365'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}

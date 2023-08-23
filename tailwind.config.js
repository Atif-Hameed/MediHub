/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(225.44deg, rgba(239, 239, 239, 0.2) 4.99%, rgba(163, 163, 163, 0.0989268) 51.17%, rgba(239, 239, 239, 0) 96.37%)',
      }
    },
  },
  plugins: [],
}


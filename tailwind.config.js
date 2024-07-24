/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#B4BBC6',
        'black': "#373435",
        'light-grey': "#F5F7FA",
        'main-orange':"#F58635",
        'dark-blue':"#203046"
      },
      backgroundImage: {
        'background-box': "url('/src/assets/img/insurance_box_background.svg')",
      },
      boxShadow: {
        'custom-light': '0px 2px 8px rgba(99, 99, 99, 0.2)',
      },
    },
  },
  plugins: [],
}

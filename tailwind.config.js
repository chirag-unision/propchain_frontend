/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "nak-light-gray": "#1E2021",
      "nak-dark-gray": "#181A1B",
      "black": "#000000",
      "white": "#ffffff",
    },
    extend: {
      backgroundImage:{
        "login-bg": "url('/src/assets/loginBackground.gif')",
      }
    },
  },
  plugins: [],
}


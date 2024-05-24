/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'ryu': "url('./src/assets/Untitled.jpeg')"
      },
      backgroundColor: {
        'color': '#E2E8F0'
      },
      colors: {
        'color': '#E2E8F0'
      }
    }
  },
  plugins: [],
}


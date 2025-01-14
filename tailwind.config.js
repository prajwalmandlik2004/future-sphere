/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f9',
          100: '#cce1f3',
          200: '#99c3e7',
          300: '#66a5db',
          400: '#3387cf',
          500: '#0069c3',
          600: '#003069', // Main brand color
          700: '#002855',
          800: '#002041',
          900: '#00182d',
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vue: {
          50: '#effef6',
          100: '#dafeea',
          200: '#b8fad7',
          300: '#80f5b7',
          400: '#41e791',
          500: '#19ce71',
          600: '#0da054',
          700: '#0f8649',
          800: '#116a3d',
          900: '#105734',
          950: '#03301b',
        },
      },
    },
  },
  plugins: [],
};

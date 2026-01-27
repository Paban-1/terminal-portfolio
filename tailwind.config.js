/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets Fira Code as the default 'mono' font
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
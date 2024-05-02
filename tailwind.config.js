/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      fontWeight: {
        'normal': 200,
        '!normal':300,
        'doit' : 400,
        '!doit' : 500,
        'smash' : 600,
        '!smash' : 700, // Adjust the value based on the font's weight scale
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'lightpink': 'hsl(275, 100%, 97%)',
        'grayishpurple': 'hsl(292, 16%, 49%)',
        'darkpurple': 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-mobile': "url('../assets/images/background-pattern-mobile.svg')",
        'hero-pattern-desktop': "url('../assets/images/background-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}


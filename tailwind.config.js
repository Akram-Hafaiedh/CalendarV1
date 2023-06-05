/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '1': '1'
      },
      width: {
        '1/7': '14.2857143%',
      },
      content: {
        'empty': '"',
      }
    },
  },
  plugins: [],
}


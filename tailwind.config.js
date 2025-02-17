/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2c3e50"
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
}
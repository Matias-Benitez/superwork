/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'ProductSansRegular': ['ProductSansRegular'],
        'ProductSansBold': ['ProductSansBold']
      }
    },
  },
  plugins: [],
}

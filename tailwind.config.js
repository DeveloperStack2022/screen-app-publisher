/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      default: 'url("./papper_bg.jpg")',
    },
  },
  plugins: [require("tailwindcss-text-fill")],
};

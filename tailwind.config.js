/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      scale: {
        250: "2.5",
        300: "3.0",
        350: "3.5",
        400: "4.0",
      },
    },
  },
  // variants: {
  //   scale: ["hover"],
  // },
  plugins: [],
};

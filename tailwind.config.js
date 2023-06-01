/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-bg": "#060507",
        primary: "#943e3b",
        "primary-light": "#c24e4a",
        secondary: "#096c81",
        "secondary-light": "#068DA9",
      },
    },
  },
  plugins: [],
};

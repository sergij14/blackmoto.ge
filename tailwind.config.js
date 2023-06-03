/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#1b1d1c",
        "back-darker": "#080908",
        primary: "#c24e4a",
        "primary-light": "#c24e4a",
        "primary-darker": "#241110",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#222322",
        "back-secondary": "#050605",
        primary: "#c24e4a",
        "primary-light": "#c24e4a",
      },
    },
  },
  plugins: [],
};

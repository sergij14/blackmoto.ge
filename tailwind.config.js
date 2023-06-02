/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#222322",
        primary: "#c24e4a",
        "primary-light": "#c24e4a",
      },
    },
  },
  plugins: [],
};

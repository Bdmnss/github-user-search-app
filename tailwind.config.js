/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["Space Mono"],
        inherit: "inherit",
      },
      screens: {
        mini: "0px",
        desktop: "1440px",
        monitor: "1900px",
      },
    },
  },
  plugins: [],
};

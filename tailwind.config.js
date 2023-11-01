module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          500: "#a78a7f",
          600: "#727272",
          700: "#5d5d5d",
          800: "#463f3a",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
        lime: { 100: "#faedcd" },
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #a78a7f",
        bs: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { gilroy: "Gilroy", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

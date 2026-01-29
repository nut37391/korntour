/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      square: "square",
      roman: "upper-roman",
    },
    fontSize: {
      xxs: ["10px", "14px"],
      ssm: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["40px", "48px"],
      "4xl": ["48px", "56px"],
    },
    extend: {
      colors: {
        // Legacy green colors (keep for backwards compatibility)
        "forest-green": "#454F45",
        "pixie-green": "#bcd5b0",
        "pine-green": "#325347",
        "green-cyan": "#235347",
        // New Blue & Gold Theme
        "sky-blue": "#0ea5e9",
        "royal-blue": "#1e40af",
        "ocean-blue": "#0369a1",
        "navy-blue": "#1e3a5f",
        "deep-blue": "#0c4a6e",
        "gold": "#f59e0b",
        "golden": "#d97706",
        "light-gold": "#fcd34d",
        "pale-gold": "#fef3c7",
        // Common colors
        "gray-stack": "#858985",
        "dark-red": "#3E3E3E",
        Gray93: "#EDEDED",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: "#1e40af",
          },
        },
      },
    }),
  ],
};

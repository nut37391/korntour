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
      "5xl": ["56px", "1"],
      "6xl": ["64px", "1"],
      "7xl": ["80px", "1"],
      "8xl": ["104px", "1"],
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "var(--font-display-th)", "var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        hand: ["var(--font-hand)", "var(--font-hand-th)", "cursive"],
      },
      colors: {
        // Samoeng Jungle Tubing theme: deep jungle green + ember orange
        jungle: {
          50: "#eef5f0",
          100: "#d3e6da",
          300: "#7fb394",
          500: "#2f7a52",
          600: "#23603f",
          700: "#1b4a33",
          800: "#143826",
          900: "#0f2a1d",
          950: "#0a1d14",
        },
        ember: {
          300: "#ffb27a",
          400: "#ff8a3d",
          500: "#ff6a13",
          600: "#e5550a",
          700: "#bf4306",
        },
        sand: "#f6f2ea",
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
            primary: "#ff6a13",
          },
        },
      },
    }),
  ],
};

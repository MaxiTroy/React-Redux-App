const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      lato: ["lato", "sans-serif"],
    },
    colors: {
      ...defaultTheme.colors,
      white: "#fff",
      "special-gray-600": "#4b5563",
      "special-red": "#DC2626",
      "special-red-800": "#991B1B",
      "special-gray": "#F5F0F0",
    },
    extend: {},
  },
  plugins: [],
};

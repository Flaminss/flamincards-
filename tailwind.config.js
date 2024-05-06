/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "3xs": "196px",
      "2xs": "312px",
      "xs": "416px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef1fb",
          100: "#dde3f6",
          200: "#bcc7ee",
          300: "#8ea0e0",
          400: "#5c78d1",
          500: "#3358c2",
          600: "#2148a8",
          700: "#17398a",
          800: "#0f2a6e",
          900: "#081f5c",
        },
        cream: {
          50: "#fbfaf7",
          100: "#f2f0ea",
          200: "#e8e5db",
        },
        ink: {
          900: "#10193a",
          700: "#3c4566",
          500: "#6b7390",
        },
      },
      fontFamily: {
        display: ["Inter Tight", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

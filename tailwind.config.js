/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    fontFamily: {
      inter: ["Inter"],
    },
    variants: {
      extend: {
        maxWidth: ["responsive"], // Include responsive variants for maxWidth utility
      },
    },
    extend: {
      colors: {
        dark: "#32343a",
        light: "#eeeff1",
        secondary: "#8f929e",
      },
      screens: {
        // xl: "1048px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        fadeOut: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeOut: "fadeOut 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

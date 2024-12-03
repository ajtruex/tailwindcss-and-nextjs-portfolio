/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        circular: ["var(--font-circular)"],
        seasons: ["var(--font-seasons)"],
        garamond: ["var(--font-garamond)"],
        gtsuperdisplay: ["var(--font-gtsuperdisplay)"],

        neuemachina: ["var(--font-neuemachina)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scrollIndicator: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.9)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        // pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulse: "pulse 10s cubic-bezier(.38, 0, .58, 1) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scrollIndicator: "scrollIndicator 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        scaleIn: "scaleIn 0.3s ease-out",
        slideUp: "slideUp 1s ease-out forwards",
        fixed: "animation: fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

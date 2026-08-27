/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505", // negro profundo (fondo base)
          soft: "#0D0D0D", // negro secundario (cards, paneles)
          raised: "#161616", // superficie elevada
        },
        blaze: {
          DEFAULT: "#E50914", // rojo principal
          bright: "#FF1018", // rojo hover / brillo
          dim: "#8C0510", // rojo apagado (bordes, sombras)
        },
        cement: {
          DEFAULT: "#777777", // gris cemento
          light: "#C5C5C5", // gris claro
          faint: "#3A3A3A", // gris oscuro para líneas/bordes
        },
        bone: "#F5F5F5", // blanco cálido
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        head: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(229,9,20,0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(229,9,20,0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
      },
    },
  },
  plugins: [],
};

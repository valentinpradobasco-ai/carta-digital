import type { Config } from "tailwindcss";

// Los colores se resuelven en tiempo de ejecución a partir de variables CSS
// (ver app/layout.tsx y lib/theme.ts), que a su vez salen de config/restaurant.config.ts.
// El patrón rgb(var(--x) / <alpha-value>) permite seguir usando modificadores
// de opacidad de Tailwind (ej: bg-primary/10) aunque el color sea dinámico.
function withOpacity(variableName: string) {
  return `rgb(var(${variableName}) / <alpha-value>)`;
}

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        "primary-dark": withOpacity("--color-primary-dark"),
        brasa: withOpacity("--color-brasa"),
        background: withOpacity("--color-background"),
        surface: withOpacity("--color-surface"),
        "surface-alt": withOpacity("--color-surface-alt"),
        text: withOpacity("--color-text"),
        muted: withOpacity("--color-muted"),
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        flicker: "flicker 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // INDUSTRIAL BRUTALISM — no Poppins
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // INDUSTRIAL TOKENS — direct hex for guaranteed consistency
        "terminal-green": "#4AF626",
        "accent-red": "#E61919",
        "accent-red-bright": "#FF2A2A",
        "surface": "#121212",
        "surface-2": "#181818",
        "border-strong": "#EAEAEA",
        "border-muted": "#3A3A3A",
      },
      borderRadius: {
        // ALL ZERO — industrial rule
        lg: "0px",
        md: "0px",
        sm: "0px",
        DEFAULT: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      fontSize: {
        "hero": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "section": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        "mono-tight": "0.05em",
        "mono-normal": "0.08em",
        "mono-wide": "0.12em",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;

import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          700: '#0D0D0D',
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1022px",
      xl: "1280px",
      "": "1536px",
      max: "1760px",
    },
  },
  plugins: [],
} satisfies Config
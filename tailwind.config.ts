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
  },
  plugins: [],
} satisfies Config
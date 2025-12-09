import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primaryText: "#EDEDED",
      },
    },
  },
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;

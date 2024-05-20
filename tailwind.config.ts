// import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

module.exports  = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000",
        secondry: "rgb(128, 128, 128)",
        textColor : "#FFCA5F"
      }
    },
  },
  plugins: [nextui(),function ({ addUtilities } : any) {
    const newUtilities = {
      '.writing-mode-vertical-rl': {
        'writing-mode': 'vertical-rl',
        'height' : "full"
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  },
  function ({ addUtilities } : any) {
    const newUtilities = {
      /* Hide scrollbar for Chrome, Safari and Opera */
      '.scrollbar-hide::-webkit-scrollbar': {
        display: 'none',
      },
      /* Hide scrollbar for IE, Edge and Firefox */
      '.scrollbar-hide': {
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none',    /* Firefox */
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};

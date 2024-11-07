import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dblue': '#252B42',
        'custom-blue': '#23A6F0',
        'custom-peach': '#FFDCD1',
        'custom-gray': '#737373',
        'custom-green': '#B9EAA8',
        'custom-red': '#E74040',
      },
      letterSpacing: {
        '0.1': '0.1px',
        '0.2': '0.2px',
      },
      boxShadow: {
        'custom-shadow': '0px 13px 19px 0px #00000012',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;

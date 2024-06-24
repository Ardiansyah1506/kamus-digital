import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-dark": "linear-gradient(180deg, #23242E 0%, #20212B 100%)",
        },
      backgroundColor:{
        "hero": "#1E1F27",
        "btn-blue": "#0099FF",
      },
      textColor:{
      "gradient-blue": "linear-gradient(180deg, #87E1FD 0%, #2A8BD1 100%)",
      "primary-blue": "#54BDE5",
      }
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      themes: [
        {
          name: "design",
          extend: {
            colors: {
              primary: "#EAA546",
              secondary: "#0070B8",
            },
          },
        },
        {
          name: "development",
          extend: {
            colors: {
              primary: "#E44F72",
              secondary: "#EFFAB0",
            },
          },
        },
        {
          name: "photography",
          extend: {
            colors: {
              primary: "#F9D846",
              secondary: "#1D8D22",
            },
          },
        },
      ],
    }),
  ],
};

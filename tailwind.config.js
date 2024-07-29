/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "linear-gradient(133deg, #001E4D, #000814 20%, #000814 85%, #001E4D)",
      },
    },
  },
  plugins: [],
};

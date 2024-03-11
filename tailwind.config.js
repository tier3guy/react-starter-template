/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        poppins: ["Poppins"],
        monts: ["Montserrat"],
      },
    },
  },
  plugins: [],
};

export default config;

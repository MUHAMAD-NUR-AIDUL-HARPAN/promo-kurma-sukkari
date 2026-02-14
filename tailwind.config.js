/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👉 Ini ngasih tau Tailwind untuk ngecek semua file React di folder src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

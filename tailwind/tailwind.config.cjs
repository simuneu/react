/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← 여기에서도 * 빠져 있었음
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

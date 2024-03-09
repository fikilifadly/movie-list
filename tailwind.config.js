/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*/*.vue', './src/**/*.vue'],
  theme: {
    extend: {
      zIndex: {
        back: '-1',
        behind: '-2',
      },
    },
  },
  plugins: [],
};

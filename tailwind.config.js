module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans JP'],
        noto1: ['Noto Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['tailwindcss'],
};

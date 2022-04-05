module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans JP'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['tailwindcss'],
};

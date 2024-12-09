/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./screens/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        black: 'GeistMono-Black',
        bold: 'GeistMono-Bold',
        light: 'GeistMono-Light',
        medium: 'GeistMono-Medium',
        normal: 'GeistMono-Regular',
        semibold: 'GeistMono-SemiBold',
        thin: 'GeistMono-Thin',
        ultrablack: 'GeistMono-UltraBlack',
        ultralight: 'GeistMono-UltraLight',
      },
    },
  },
  plugins: [],
};

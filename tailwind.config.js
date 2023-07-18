import * as FlowBite from 'flowbite-react';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    minHeight: {
      '1/4': '25%'
    },
    extend: {
      colors: {
        'dodger-blue': {
          50: '#edf7ff',
          100: '#d7ebff',
          200: '#b9ddff',
          300: '#88c9ff',
          400: '#50aaff',
          500: '#2886ff',
          600: '#2170ff',
          700: '#0a4feb',
          800: '#0f3fbe',
          900: '#133b95',
          950: '#11255a',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite, FlowBite],
};

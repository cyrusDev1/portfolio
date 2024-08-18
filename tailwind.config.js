/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
];
export const theme = {
  extend: {
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      slate: '#8892b0',
      'lightest-slate': '#ccd6f6',
      'lightest-navy': '#233554',
    },
    fontFamily: {
      mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      satosi: ['Satoshi'],
    },
    boxShadow: {
      '3xl': '3px 3px 0px 0px #64ffda',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};
export const plugins = [];

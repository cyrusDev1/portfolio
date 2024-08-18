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
      'lightest-slate': '#ccd6f6',
    },
    fontFamily: {
      mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      sans: [
        'Calibre',
        'Inter',
        'San Francisco',
        'SF Pro Text',
        '-apple-system',
        'system-ui',
        'sans-serif',
      ],
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

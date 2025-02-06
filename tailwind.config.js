/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js}',
      './public/**/*.{html,js}',
    ],
    theme: {
      extend: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
        colors: {
          primary: '#0874f2',
          secondary: '#f7a93b',
        },
      },
    },
    plugins: [],
  };
  
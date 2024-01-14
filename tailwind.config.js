import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchVariant, addComponents, theme }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3',
          },
        }
      );
      addComponents({
        // '.card-my': {
        //   borderRadius: theme('spacing.2'),
        //   background: theme('colors.white'),
        //   boxShadow: '10px 10px 20px #a7a5a5,-10px -10px 20px #ffffff',
        // },
      });
    }),
  ],
};

const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './docs/.vitepress/**/*.js',
      './docs/.vitepress/**/*.vue',
      './docs/.vitepress/**/*.ts',
    ],
    options: {
      safelist: ['html', 'body'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'brand-primary' : '#18300B',
        // The following colours deviate from the tailwind default
        gray: colors.warmGray,
        green: colors.emerald,
        blue: colors.lightBlue,
        purple: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [],
}

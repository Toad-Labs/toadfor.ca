module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './blog/.vitepress/**/*.js',
      './blog/.vitepress/**/*.vue',
      './blog/.vitepress/**/*.ts',
    ],
    options: {
      safelist: ['html', 'body'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

module.exports = {
  purge: {
    enabled: true,
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
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

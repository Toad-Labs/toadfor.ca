module.exports = {
  purge: {
    enabled: true,
    content: [
      './docs/**/*.js',
      './docs/**/*.vue',
      './docs/**/*.ts',
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
    extend: {},
  },
  variants: {},
  plugins: [],
}

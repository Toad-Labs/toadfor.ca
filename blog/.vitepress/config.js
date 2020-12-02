module.exports = {
  title: 'Hello Toad',
  description: 'Just playing around.',
  docsDir: 'blog',
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      // md.use(require('markdown-it-xxx'))
    }
  }
}

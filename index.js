var katex = require("katex");
require('katex/dist/contrib/mhchem.js');

module.exports = {
    book: {
        assets: "./static",
        js: [
            'katex.min.js'
        ],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        js: [
            'katex.min.js'
        ],
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
       math: { // Double dollar signs ($) for math blocks (centered)
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$$',
        end: '$$'
      },
      process(block) {
        let output = ''
        try {
          output = katex.renderToString(block.body, {
            displayMode: true,
            extensions: ["mhchem.js"]
          })
        } catch (e) {
          console.error(e)
          output = e
        }
          return output
      }
       },
        math_inline: { // Single dollar sign for inline math
           shortcuts: {
               parsers: ['markdown', 'asciidoc', 'restructuredtext'],
               start: '$',
               end: '$'
           },
            process(block) {
               let output = ''
                try {
                   output = katex.renderToString(block.body, {
                       displayMode: false,
                       extensions: ["mhchem.js"]
                   })
               } catch (e) {
                   console.error(e)
                   output = e
               }
                return output
           }
       }
    }
};

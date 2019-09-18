const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './components/**/*.html',
    './components/**/*.vue',
    './components/**/*.js',
    './layouts/**/*.html',
    './layouts/**/*.vue',
    './layouts/**/*.js',
    './pages/**/*.html',
    './pages/**/*.vue',
    './pages/**/*.js',
    // etc.
  ],

  // whitelist for prismjs
  whitelistPatternsChildren: [/^token/, /^pre/, /^code/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}

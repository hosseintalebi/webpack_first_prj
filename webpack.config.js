const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    // "path" require an absolute path. Using path.resolve ensures that the path in correctly specified for different OSes
    // __dirname is a const by node that has dir name of the module
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
}

module.exports = config

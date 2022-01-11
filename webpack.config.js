const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
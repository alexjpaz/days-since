var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
  },
  devServer: {
    contentBase: './public'
  }
};

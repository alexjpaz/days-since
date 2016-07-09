var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html.ejs'
    })
  ],
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'mustache?noShortcut'
    }],
  },
  devServer: {
    contentBase: './public'
  }
};

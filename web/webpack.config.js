var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html.ejs'
    })
  ],
  module: {
    preLoaders: [
     { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      {test: /\.html$/, loader: 'mustache?noShortcut'}
    ],
  },
  devServer: {
    contentBase: './public'
  }
};

var webpackMerge = require('webpack-merge'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./base.webpack.config.js');

var distPath = path.join(__dirname, '../dist');

module.exports = webpackMerge.strategy({
  entry: 'prepend',
})(commonConfig, {
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map',
  output: {
    path: distPath,
    filename: '[name].js',
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  plugins: [
    new ExtractTextPlugin({
      disable: true,
    }),
  ],
});
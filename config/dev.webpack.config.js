var webpackMerge = require('webpack-merge'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./base.webpack.config.js');

var distPath = path.join(__dirname, '../dist');

module.exports = webpackMerge.strategy({
  entry: 'prepend',
})(commonConfig, {
  // Debug ES6 code
  devtool: 'inline-source-map',
  output: {
    path: distPath,
    filename: '[name].js',
  },
  devServer: {
    port: 8081,
    hot: true,
  },
  plugins: [
    new ExtractTextPlugin({
      disable: true,
    }),
  ],
});
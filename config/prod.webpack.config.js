var webpackMerge = require('webpack-merge'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    //CompressionPlugin = require('compression-webpack-plugin'),
    commonConfig = require('./base.webpack.config.js');

var distPath = path.join(__dirname, '../dist'); 

module.exports = webpackMerge(commonConfig, {
    // devtool: 'cheap-module-source-map',
    output: {
      path: distPath,
      filename: '[chunkhash].[name].js',
    },
    plugins: [
      // Generate bundle with css extension.
      new ExtractTextPlugin({
        filename: '[chunkhash].[name].css',
        disable: false,
        allChunks: true,
      }),
      // Compression files (no-recommended)
      //new CompressionPlugin({
      //  asset: '[path].gz[query]',
      //  algorithm: 'gzip',
      //  minRatio: 0.8,
      //}),
    ],
  });
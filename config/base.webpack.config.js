var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath  = path.join(__dirname, '../src');

module.exports = {
    context: srcPath,
    entry: {
        app: './index.js',
        appStyles: [
            './styles.scss',
        ],
        vendor: [
            'jquery',
            'materialize-css',
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
            '../node_modules/materialize-css/dist/css/materialize.css',
        ],
    },
    module: {
        rules: [
            // Execute ESLint while we are writing our code. webpack-dev-server uses it to continuously check for errors.
            { test: /\.js$/, 
              include: path.resolve(__dirname, '../src'),
              exclude: /node_modules/, 
              enforce: 'pre' /*old preloader*/, 
              loader: 'eslint-loader',
              options: {
                /*configFile: path.resolve("reglas_personalizadas.js"),*/
                outputReport: {
                  //filePath: 'eslint-report.xml',
                  //formatter: require('eslint/lib/formatters/checkstyle')
                  filePath: '../eslint-report.html',
                  formatter: require('eslint/lib/formatters/html')
                },
                quiet: true,
                failOnError: false,
                failOnWarning: false,
                emitError: false,
                emitWarning: false
              } 
            },            
            // Transpilate ES6 code
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            // Transpilate SCSS to CSS
            { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader', }, { loader: 'sass-loader', } ] }) },
            // Load custom CSS to index.html
            { test: /\.css$/, include: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: { loader: 'css-loader' } })},
            // Load the fonts and images from Bootstrap
            { test: /\.(woff|woff2)(\?v=\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
            // Load our png/jpg in /dist
            { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=5000' },
            // Load html in /dist
            { test: /\.html$/, loader: 'html-loader' }
        ],
    },
    plugins: [
        // Generate index.html in /dist
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true,
        }),
        // Allow use jQuery
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        // Place third party libraries in separate js
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
        }),
        // Order the bundle imported.
        new webpack.HashedModuleIdsPlugin(),
        // Generate bundle with css extension.
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
};
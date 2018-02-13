var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath  = path.join(__dirname, '../src');

module.exports = {
    context: srcPath,
    entry: {
        app: './students.js',
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
                }
              } 
            },
            // loaders normales
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader', }, { loader: 'sass-loader', } ] }) },
            { test: /\.css$/, include: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: { loader: 'css-loader' } })},
            // Loading glyphicons Using here url-loader and file-loader
            { test: /\.(woff|woff2)(\?v=\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=5000' },
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
};
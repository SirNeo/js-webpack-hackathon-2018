var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath  = path.join(__dirname, '/src'),
    distPath = path.join(__dirname, '/dist');

module.exports = {
    context: srcPath,
    resolve: {
        extensions: ['.js', '.ts'],
    },
    entry: {
        app: './index.ts',
        appStyles: [
            './styles.scss',
        ],
        vendor: [
            'materialize-css',
            'core-js',
            'reflect-metadata',
            'zone.js',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'rxjs',
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
            '../node_modules/materialize-css/dist/css/materialize.css',
        ],
    },
    output: {
        path: distPath,
        filename: '[chunkhash].[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', },
                        { loader: 'sass-loader', },
                    ],
                }),
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                    },
                }),
            },
            // Loading glyphicons
            // Using here url-loader and file-loader
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    // For development: Permite ver ficheros .js/.ts en la consola del navegador (.tsconfig.json -> "sourceMap": true)
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
    },
    plugins: [
        // Generate index.html in /dist
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true,
        }),
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            srcPath
        ),
    ],
};
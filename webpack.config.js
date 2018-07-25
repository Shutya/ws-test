var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [path.resolve(__dirname, './client/index.js'), path.resolve(__dirname, './client/index.css')],

    output: {
        path: __dirname,
        filename: 'dist/application.bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('dist/style.bundle.css'),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                        plugins: [
                            'babel-plugin-transform-class-properties',
                            'babel-plugin-syntax-dynamic-import',
                            'babel-plugin-transform-object-rest-spread'
                        ]
                    }
                }]
            },
            {
                test: /\.(css|scss)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            }
        ]
    },

    stats: {
        colors: true
    },

    devtool: 'source-map'
};
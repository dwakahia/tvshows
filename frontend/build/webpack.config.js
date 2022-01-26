const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: "development",
    entry: "../src/app.js",
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: resolve('assets/images'),
                    to: resolve('dist/assets/images')
                }
            ]
        })
    ]
}
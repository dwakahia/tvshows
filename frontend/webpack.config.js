const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8000, // Convert images < 8kb to base64 strings
            //             name: '/assets/images/[name].[ext]'
            //         }
            //     }]
            // },
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
}
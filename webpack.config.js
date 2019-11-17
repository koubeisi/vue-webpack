const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devtool: 'inline-source-map',       //追踪错误和警告
    //webpack-dev-server配置，发服务器(dev server)，在哪里查找文件
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "vue_webpack",
            filename: "index.html",
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
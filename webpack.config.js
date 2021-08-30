const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';

module.exports = {
    mode: 'development',
    entry:{
        index: './js/index.js'
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ],
    devtool: "inline-source-map",
    devServer:{
        static: './dist'
    }
}
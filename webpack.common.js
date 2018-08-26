const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
            {test: /\.html$/, use: [{loader: 'html-loader', options: {minimize: true}}]},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'file'}},
            {test: /\.(woff|woff2)$/, use: {loader: 'url?prefix=font/&limit=5000'}},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'url?limit=10000&mimetype=application/octet-stream'}},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'url?limit=10000&mimetype=image/svg+xml'}}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
          template: 'src/index.html',
          filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
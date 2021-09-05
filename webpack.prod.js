const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
    plugins:[new MiniCssExtractPlugin()],
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        },
        {
           test: /\.s?css$/,
           use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }],
    },
    mode: 'production',
    devtool: 'source-map',
});
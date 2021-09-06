const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
        loader:'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
    },
    {
       test: /\.s?css$/,
       use: [
        'style-loader',
        "css-loader",
        "sass-loader",
      ],
    }],
},
  devServer: {
      // static: path.join(__dirname, 'public'),
      static: {
          directory: path.join(__dirname, 'public'),
          publicPath: '/',
        },
      historyApiFallback: true,
}});
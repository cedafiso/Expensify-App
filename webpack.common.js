const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
    plugins:[new MiniCssExtractPlugin()],
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
    },
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
        //    use: [
        //        'style-loader',
        //        'css-loader',
        //        'sass-loader'
        //    ]
        }],
    },
};
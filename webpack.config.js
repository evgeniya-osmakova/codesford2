const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: './',
    path: path.join(__dirname, '/build'),
    filename: 'result.js',
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [path.resolve(__dirname, "public/fonts")],
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        exclude: [path.resolve(__dirname, "public/fonts")],
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: "svgo-loader",
          },
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        include: [path.resolve(__dirname, "public/fonts")],
        exclude: [path.resolve(__dirname, "src")],
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};

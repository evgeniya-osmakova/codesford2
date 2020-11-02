const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'result.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: [path.resolve(__dirname, "public/fonts")],
        use: [
          {
            loader: 'svg-fallback-loader',
          },
          {
            loader: "svg-react-loader",
          },
          {
            loader: "babel-loader"
          }
        ]
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
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
        test: /\.(ttf|eot|svg|woff)$/,
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

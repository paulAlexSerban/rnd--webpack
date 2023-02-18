const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./source/javascript",
  output: {
    path: DIST_DIR,
    filename: "[name].[contenthash:12].js",
    publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader",
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Hello World Production Webpack config",
      template: "source/index.html",
      inject: "head",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:12].css",
    }),
  ],
};

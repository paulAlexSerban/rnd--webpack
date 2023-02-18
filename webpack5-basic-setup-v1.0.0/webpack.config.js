const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|ttf)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes
          },
        },
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: (entryName) => entryName + '.html',
      title: "Hello World of Webpack",
      template: "src/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "Content-Security-Policy": { "http-equiv": "Content-Security-Policy", content: "default-src http:" },
        "set-cookie": { "http-equiv": "set-cookie", content: "name=value; expires=date; path=url" },
      },
    }),
  ],
};

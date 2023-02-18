const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: "",
    clean: true,
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    port: 9000,
    compress: true,
    static: {
      directory: DIST_DIR,
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    }
  },
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
      {
        test: /\.hbs$/,
        use: [
          "handlebars-loader"
        ]
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Hello World of Handlebars",
      description: "Handlebars template description",
      template: "src/index.hbs",
      inject: "head",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
    }),
  ],
};

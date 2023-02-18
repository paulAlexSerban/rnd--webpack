const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = [];
let htmlWebpackPluginPages = [];

const getEntries = () =>
  glob.sync("./src/pages/**/*.entry.js").reduce((acc, item) => {
    const path = item.split("/");
    path.pop();
    const name = path.pop();
    acc[name] = item;
    htmlPageNames.push(name);

    htmlPageNames.forEach((page) =>
      htmlWebpackPluginPages.push(
        new HtmlWebpackPlugin({
          template: `./src/pages/${page}/${page}.html`,
          chunks: [`${page}`],
          inject: 'body',
          filename: `${page}.html`,
          meta: {
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
          },
        })
      )
    );
    return acc;
  }, {});

module.exports = {
  entry: getEntries(),
  devServer: {
    contentBase: './dist',
    port: 9000,
    index: 'basepage.html'
    },
  output: {
    filename: "scripts/[name].[contenthash].scripts.js",
    path: path.resolve(__dirname, "../dist"),
    assetModuleFilename: 'asstes/[name][ext]'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: true
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ["source-map-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webm|mp4)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: true
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].styles.css",
    }),
    new CleanWebpackPlugin(),
    ...htmlWebpackPluginPages
  ],
};

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(SRC_DIR, "index.js"),
	output: {
		path: DIST_DIR,
		filename: "[name].[contenthash:12].js",
		publicPath: "",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
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
			template: path.join(SRC_DIR, "index.html"),
		}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:12].css",
    }),
	],
};

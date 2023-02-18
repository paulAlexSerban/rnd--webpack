const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(SRC_DIR, "index.js"),
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
			index: "index.html",
			writeToDisk: true,
		},
		client: {
			overlay: true,
		},
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
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(SRC_DIR, "index.html"),
			filename: "index.html",
		}),
	],
};

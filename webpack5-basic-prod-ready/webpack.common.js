const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(srcDir, "index.js"),
	output: {
		path: distDir,
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
			template: path.join(srcDir, "index.html"),
		}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:12].css",
    }),
	],
};

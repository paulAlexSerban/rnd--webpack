const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const distDir = path.resolve(__dirname, "dist");

module.exports = merge(common, {
	mode: nodeEnv,
	devtool: "inline-source-map",
	devServer: {
		port: 9000,
		static: {
			directory: distDir,
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
				test: /\.(png|jpg|svg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: "./images/[name][ext]",
				},
			},
		],
	},
});

const path = require("path");
const glob = require("glob");
const loaders = require("./build/loaders");
const webpack = require("webpack"); // to access built-in plugins
const plugins = require("./build/plugins");

const getEntries = (path) =>
	glob.sync(path).reduce((acc, item) => {
		const path = item.split("/");
		path.pop();
		const name = path.pop();
		acc[name] = item;
		return acc;
	}, {});

const entries = getEntries("./source/layout/*/*/*.js");

module.exports = {
	entry: { ...entries },
	module: {
		rules: [loaders.JSLoader, loaders.CSSLoader],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "scripts/[name].script.js",
	},
	plugins: [new webpack.ProgressPlugin(), plugins.ESLintPlugin, plugins.MiniCssExtractPlugin],
};

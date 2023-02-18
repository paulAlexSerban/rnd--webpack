const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "styles/[name].style.css",
  chunkFilename: '[id].css'
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
  context: path.resolve(__dirname, '../source/components/'),
  files: '**/*.*.js',
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  ESLintPlugin: ESLintPlugin,
};
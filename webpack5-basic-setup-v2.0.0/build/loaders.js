const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSLoader = {
  test: /\.(css|sass|scss)$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        url: false,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

const JSLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'].map(require.resolve)
    },
  },
};

module.exports = {
  CSSLoader: CSSLoader,
  JSLoader: JSLoader,
};

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: process.env.NODE_ENV || "development",
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    static: {
      directory: DIST_DIR
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true
    },
    client: {
      overlay: true,
    }
  },
  module:{
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset",
        parser:{
          dataUrlCondition:{
            maxSize: 10 * 1024,
          }
        },
        generator:{
          filename: "./images/[name][ext]"
        }
      }
    ]
  }
});
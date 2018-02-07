/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const BUILD_PATH = path.join(__dirname, '../build')

module.exports = merge(
  common,
  {
    output: {
      filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
      hot: true,
      open: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('DEVELOPMENT')
      })
    ]
  }
)

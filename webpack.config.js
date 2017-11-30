const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const SRC_PATH = path.join(__dirname, 'src')
const BUILD_PATH = path.join(__dirname, 'build')

module.exports = {
  entry: path.join(SRC_PATH, 'index.jsx'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: SRC_PATH,
        use: {
          loader: 'eslint-loader',
          options: {
            emitError: true
          }
        }
      },
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        include: SRC_PATH,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin()
  ],
  devServer: {
    publicPath: '/',
    contentBase: BUILD_PATH,
    hot: true
  }
}

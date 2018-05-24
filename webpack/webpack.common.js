/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');
const BUILD_PATH = path.join(__dirname, '../build');

module.exports = {
  entry: `${SRC_PATH}/index.jsx`,
  output: {
    path: BUILD_PATH,
    publicPath: '/',
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
            emitError: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        include: SRC_PATH,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

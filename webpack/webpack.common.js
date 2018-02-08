/* eslint-disable */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src')
const BUILD_PATH = path.join(__dirname, '../build')

module.exports = {
  entry: {
    app: [`${SRC_PATH}/index.jsx`],
    vendor: ['semantic-ui-react']
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/'
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
    new HtmlWebpackPlugin({
      template: `public/index.html`
    }),
    new StylelintPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

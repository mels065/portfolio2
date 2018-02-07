/* eslint-disable */

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(
  common,
  {
    output: {
      filename: 'static/[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    ctx: {
                      autoprefixer: {
                        browsers: 'last 2 versions'
                      }
                    }
                  }
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('PRODUCTION')
      }),
      new UglifyJsPlugin({
        sourceMap: true
      }),
      new ExtractTextPlugin({
        filename: 'styles/styles.[contenthash].css',
        allChunks: true
      })
    ]
  }
)

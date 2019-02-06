const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: 'css-loader',
                options: {
                  sourceMap: false
                }
            }],
          })
        },
    ],
    },
    plugins: [
      new UglifyJsPlugin({
        test: /\.js$/,
        cache: true,
        sourceMap: false,
        parallel: true,
        extractComments: true,
      }),
      new ExtractTextPlugin('style.css'),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
    ],
});
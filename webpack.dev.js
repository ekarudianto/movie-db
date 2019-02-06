const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }, 
  ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: false,
    }),
    new webpack.DefinePlugin({}),
  ],
});
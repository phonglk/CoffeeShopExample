/*eslint-disable */
require('es6-promise').polyfill(); // https://github.com/webpack/css-loader/issues/145
var _ = require('lodash');
var path = require('path');
var fs = require("fs");
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        'bundle': ['babel-polyfill', './index'],
        vendor: ['react', 'redux', 'react-redux',
                'react-dom', 'bluebird',
                'redux-thunk', 'redux-promise', 'redux-logger',
                'core-decorators'],
    },
    output: {
        path: path.join(__dirname, "../../public/dist/react"),
        filename: '[name].min.js',
        publicPath: "/react/"
    },
    module: {
        loaders: [
            {
              test: /\.css|\.less$/,
              loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
              test: /\.jsx$|\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                plugins: [
                  require.resolve('babel-plugin-transform-decorators-legacy')
                ],
                presets: [
                  require.resolve('babel-preset-es2015'),
                  require.resolve('babel-preset-react'),
                  require.resolve('babel-preset-stage-0')
                ]
              }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [
          path.resolve('./node_modules'),
        ],
    },
    resolveLoader: {
        root: [
            path.join(__dirname, "node_modules"),
        ],
        alias: {}
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(true)
    ]
};

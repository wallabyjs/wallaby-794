/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './App/main.tsx',
    vendor: [
      'babel-polyfill',
      'bootstrap',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'redux-thunk',
      'react-router-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
    new webpack
      .ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: '.',
    host: 'localhost',
    port: 9000
  }
};
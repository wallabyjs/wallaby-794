var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');

// as described in
// https://wallabyjs.com/docs/integration/webpack.html#typescript-and-coffeescript
webpackConfig.module.loaders = [];
webpackConfig.resolve.extensions = ['', '.js', '.jsx'];
webpackConfig.entry = {};

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack(webpackConfig);

  return {
    name: 'xxx',

    files: [
      { pattern: 'App/**/*.ts', load: false },
      { pattern: 'App/**/*.tsx', load: false },
      { pattern: 'App/**/*.spec.ts', ignore: true }
    ],

    tests: [
      { pattern: 'App/**/*.spec.ts', load: false }
    ],

    testFramework: 'mocha',

    compilers: {
      '**/*.ts*': wallaby.compilers.typeScript({ module: 'es6' })
    },

    // as descibed in
    // https://wallabyjs.com/docs/integration/typescript.html#compiling-to-es6-and-using-babel
    preprocessors: {
      '**/*.js*': function(file) {
        return require('babel-core').transform(
          file.content, {sourceMap: true, presets: ['es2015', 'react']});
      }
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: false
  };
};
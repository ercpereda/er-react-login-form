var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var path = require('path');

var config = webpackMerge(commonConfig, {
  entry: './src/LoginForm.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'er-react-login-form.js',
    libraryTarget: 'commonjs'
  },

  target: 'node',

  externals: {
    'react': 'react',
    'classnames': 'classnames'
  }
});

module.exports = config;

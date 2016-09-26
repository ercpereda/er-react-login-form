var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var CopyPlugin = require('copy-webpack-plugin');
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
  },

  plugins: [
    new CopyPlugin([
      { from: 'src/avatar.png' }
    ])
  ]
});

module.exports = config;

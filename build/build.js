var path = require('path');
var basis = require('./basis');
var webpack = require('webpack');
var utils = require('./utils');
var existsSync = require('fs').existsSync;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ora = require('ora');
var chalk = require('chalk');
var ora = require('ora');
var packageName = require('../package.json').name;

var cfg = Object.assign({}, basis, {
  watch: true,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: packageName + '.min.js',
    library: packageName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
    ,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});

spinner = ora(chalk.blue('[build start]') + ' : ' + packageName + '.min.js');
spinner.start();
var compiler = webpack(cfg);
compiler.run(function (err, st) {
  // do
  if (err) {
    console.log(chalk.red('Errror: ' + err));
    return;
  }
  spinner.stop();
  console.log(chalk.green('[build done] '), 'success : ', packageName + '.min.js');
});
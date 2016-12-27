var path = require('path');
var basis = require('./basis');
var webpack = require('webpack');
var util = require('util');
var check = require('./check');
var program = require('commander');
var chalk = require('chalk');
var ora = require('ora');
var packageName = require('../package.json').name;
var spinner;
var spinnerObj = {};
var cps = [];

var cfg = Object.assign({}, basis, {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: packageName + '.common.js',
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
  }
});
spinner = ora(chalk.blue('[build start]') + ' : ' + packageName + '.common.js');
spinner.start();
var compiler = webpack(cfg);
compiler.run(function (err, st) {
  // do
  if (err) {
    console.log(chalk.red('Errror: ' + err));
    return;
  }
  spinner.stop();
  console.log(chalk.green('[build done] '), 'success : ', packageName + '.common.js');
});


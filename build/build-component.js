var Components = require('../components.json');
// var config = require('./config');
var basis = require('./basis');
var webpack = require('webpack');
var util = require('util');
var check = require('./check');
// var program = require('commander');
var chalk = require('chalk');
var ora = require('ora');

var spinner;
var spinnerObj = {};
var cps = [];
for (let i in Components) {
  var tmp = {};
  tmp[i] = Components[i];
  cps.push(tmp);
}

function build (cps) {
  var s = {}, path, name, cfg, pathName;
  if (cps.length >= 1) {
    s = cps.shift();
  }
  for (var i in s) {
    path = s[i];
    name = i;
    pathName = path.replace('./src/components/', '');
  }
  if (path && name) {
    spinner = ora(chalk.blue('[build start]') + ' : ' + name);
    spinner.start();

    cfg = Object.assign({}, basis, {
      entry: {
        index: path + '/index.js'
      },
      devtool: false,
      output: {
        filename: '[name].js',
        path: './dist/' + pathName,
        library: name,
        libraryTarget: 'umd',
        umdNamedDefine: true
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"development"'
          }
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
        // new webpack.optimize.OccurenceOrderPlugin()
      ]
    });

    var compiler = webpack(cfg);
    // compiler.plugin('done', function (stats) {
    //   // do
    // });
    compiler.run(function (err, stats) {
      if (err) {
        console.log(chalk.red('Errror: ' + err));
        return;
      }
      spinner.stop();
      console.log(chalk.green('[build done] '), 'success : ', name);
      build(cps);
    });
  }
}
build(cps);

var Components = require('../components.json');
// var config = require('./config');
var basis = require('./basis');
var webpack = require('webpack');
var util = require('util');
var check = require('./check');
// var program = require('commander');
var chalk = require('chalk');
var ora = require('ora');
var utils = require('./utils');

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
      ],
      module: {
        preLoaders: [
          {
            test: /\.vue$/,
            loader: 'eslint',
            // include: projectRoot,
            exclude: /node_modules/
          },
          {
            test: /\.js$/,
            loader: 'eslint',
            // include: projectRoot,
            exclude: /node_modules/
          }
        ],
        loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },

          {
            test: /\.js$/,
            loader: 'babel',
            // include: projectRoot,
            exclude: /node_modules/
          },

          {
            test: /\.json$/,
            loader: 'json',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
              limit: 10000,
              name: utils.assetsPath('images/[name].[hash:7].[ext]')
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          },
          {
            test: /\.scss$/,
            // include: projectRoot,
            // loaders: ['style', 'css', 'sass', 'scss']
            // loaders: ['sass']
            // loader: 'style!css!sass'
            // loader: ExtractTextPlugin.extract('style', 'css!sass')
            loader: 'style!css!sass'
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader']
          }
        ]
      },
      vue: {
        loaders: utils.cssLoaders(),
        preserveWhitespace: false,
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }      
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

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
    filename: packageName + '.js',
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

spinner = ora(chalk.blue('[build start]') + ' : ' + packageName + '.js');
spinner.start();
var compiler = webpack(cfg);
compiler.run(function (err, st) {
  // do
  if (err) {
    console.log(chalk.red('Errror: ' + err));
    return;
  }
  spinner.stop();
  console.log(chalk.green('[build done] '), 'success : ', packageName + '.js');
});
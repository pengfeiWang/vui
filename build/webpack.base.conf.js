var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue': 'vue/dist/vue.js',
      'src': path.resolve(__dirname, '../src'),
      // 'static': path.resolve(__dirname, '../static/'),
      // 'assets': path.resolve(__dirname, '../src/app/assets'),
      'style': path.resolve(__dirname, '../src/style/'),
      'components': path.resolve(__dirname, '../src/app/components/'),
      'modules': path.resolve(__dirname, '../src/app/modules/'),
      'utils': path.resolve(__dirname, '../src/app/utils/'),
      'config': path.resolve(__dirname, '../config/app-config'),
      'store': path.resolve(__dirname, '../src/app/store/'),
      'mutationTypes': path.resolve(__dirname, '../src/app/store/mutation-types.js'),
      'router': path.resolve(__dirname, '../src/app/router/'),
      'api': path.resolve(__dirname, '../src/app/api/')
    }
  },

  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
      // { test: /\.ts?$/, loader: "ts-loader" }
    ],
    loaders: [
      // { test: /\.ts?$/, loader: "ts-loader" },
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
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
        loaders: ['style', 'css', 'sass', 'scss']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
};

var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);


module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'v2ui.js'
  },
  externals: {
    // 'vue': 'vue'
    // 'extend': 'extend',
    // 'classnames': 'classnames'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
    // , new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   sourceMap: false,
    //   compress: {
    //     warnings: false,
    //     // hoist_vars: false,
    //     // if_return: false,
    //     // hoist_funs: false,
    //     // properties: false,
    //     // booleans: false,
    //     // cascade: false
    //   }
    // })
  ],
  resolve: {
    extensions: ['', '.js', '.ts', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components/'),
      'utils': path.resolve(__dirname, '../src/utils/'),
      'config': path.resolve(__dirname, '../src/config/')
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
        // loaders: ['style', 'css', 'sass', 'scss']
        // loader: 'style!css!sass'
        // loader: ExtractTextPlugin.extract('style', 'css!sass')
        loader: 'style!css!sass'
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

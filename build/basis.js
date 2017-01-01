var path = require('path');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dependencies = require('../package.json').dependencies;

var fs = require('fs');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));

var externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};
// utilsList.forEach(function (file) {
//   file = path.basename(file, '.js');
//   externals[`./src/utils/${file}`] = `./dist/utils/${file}`;
// });
Object.keys(dependencies).forEach(function (key) {
  externals[key] = key;
});

module.exports = {
  watch: true,

  externals: externals,
  resolve: {
      extensions: ['', '.js', '.vue']
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  plugins: [],
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
        // loader: 'style!css!sass'
        // loader: ExtractTextPlugin.extract('style', 'css!sass')
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
  // ,
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // }
  // ,

  // vue: {
  //   loaders: utils.cssLoaders(),
  //   preserveWhitespace: false,
  //   postcss: [
  //     require('autoprefixer')({
  //       browsers: ['last 2 versions']
  //     })
  //   ]
  // }
};



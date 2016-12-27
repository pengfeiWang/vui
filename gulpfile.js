'use strict';
const gulp = require('gulp');
const changed = require('gulp-changed');
// const gulpSequence = require('gulp-sequence');
// const babel = require('gulp-babel');
// var glob = require('glob');
const del = require('del');
const webpack = require('gulp-webpack');
// const config = require('./build/build');
const through = require('through2');
const uglify = require('gulp-uglify');
var colors = require('colors');
// var glob = require('glob');
var named = require('vinyl-named');
// var files = glob.sync('./front-src/**/*.js');


colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'red',
  info: 'green',
  data: 'blue',
  help: 'cyan',
  warn: 'yellow',
  debug: 'magenta',
  error: 'red'
});


const dist = './dist';


var source = ['./src/components/*/index.js', './src/components/index.js'];

function modify (modifier) {
  return through.obj(function (file, encoding, done) {
    var content = modifier(String(file.contents));
    file.contents = new Buffer(content);
    this.push(file);
    done();
  });
}


function wrapDefine (data) {
  var sTart = 'module.exports=\n';
  data = data.trim();
  if (/^module\.exports\=/.test(data)) {
    return data;
  }
  return sTart + data;
}
// 编译js
gulp.task('buildjs', function () {
  console.log('///**********************'.bold);
  console.log('         开始编译'.green.bold);
  console.log('**********************///'.bold);
  return gulp.src(source)
    .pipe(changed(dist))
    .pipe(named(function (file) {
      console.log(file.path);
      return file;
    }))
    // .pipe(webpack(config))
    // .on('error', function (err) {
    //   console.log('buildjs Error!', err.message);
    //   this.end();
    // })
    .pipe(gulp.dest(dist));
});
// 监听任务 运行语句 gulp watch
gulp.task('watchs', function () {
  gulp.watch(source, ['buildjs']);

});

// 注册缺省任务
gulp.task('default', ['buildjs', 'watchs']);



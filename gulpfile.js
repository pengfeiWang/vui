'use strict';
const gulp = require('gulp');
const changed = require('gulp-changed');
// const gulpSequence = require('gulp-sequence');
// const babel = require('gulp-babel');
const del = require('del');
const webpack = require('gulp-webpack');
const config = require('./build/build');
const through = require('through2');

var colors = require('colors');  




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
})


const dist = './dist';


var source = ['./index.js']

function modify(modifier) {
  return through.obj(function(file, encoding, done) {
    var content = modifier(String(file.contents));
    file.contents = new Buffer(content);
    this.push(file);
    done();
  });
}


function wrapDefine(data) {
  var sTart = 'module.exports=\n';
  var data = data.trim();
  if(/^module\.exports\=/.test(data)) {
    return data;
  }
  return sTart + data;
}
// 编译js
gulp.task('buildjs', function () {
  console.log('///**********************'.bold)
  console.log('         开始编译'.green.bold)
  console.log('**********************///'.bold)
  return gulp.src(source)
    .pipe(changed(dist))
    .pipe(webpack( config ))
    .on('error', function(err) {
      console.log('buildjs Error!', err.message);
      this.end();
    })
    .pipe(modify(wrapDefine))
    .on('error', function(err) {
      console.log('buildjs modify!', err.message);
      this.end();
    })    
    .pipe(gulp.dest(dist))
});
// 监听任务 运行语句 gulp watch
gulp.task('watchs', function (){
  gulp.watch(['./index.js', 'src/**/*'], ['buildjs']);

});

// 注册缺省任务
gulp.task('default', ['buildjs','watchs']);




const gulp = require('gulp'),
      sass = require('gulp-sass'),
      connect = require('gulp-connect'),
      uglify = require('gulp-uglify'),
      htmlmin = require('gulp-htmlmin'),
      imagemin = require('gulp-imagemin'),
      babal = require('gulp-babel');
//编译sass文件
gulp.task('sass',function(){
    gulp.src('src/scss/*.scss')
        .pipe(sass({outputStyle:"compact"}))
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
})
//html修改刷新
gulp.task('htmlre',function(){
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
})
//js文件修改刷新
gulp.task('jsre',function(){
    gulp.src('src/**/*.js')
        .pipe(connect.reload());
})
//启动服务器
gulp.task('connect',function(){
    connect.server({
        root: 'src',
        livereload: true
      });
})
//压缩图片
gulp.task('imagemin',()=>
     gulp.src('imgs/*')
         .pipe(imagemin())
         .pipe(gulp.dest('src/images'))
)
//监视任务
gulp.task('watch',function(){
    gulp.watch("src/**/*.html", ["htmlre"]);
    gulp.watch("src/scripts/*.js", ["jsre"]);
	gulp.watch("src/scss/*.scss", ["sass"]);
})
gulp.task('build',["sass", "jsre","connect", "watch"]);
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload,
    //   connect = require('gulp-connect'),
      uglify = require('gulp-uglify'),
      htmlmin = require('gulp-htmlmin'),
      imagemin = require('gulp-imagemin'),
      babal = require('gulp-babel');
//编译sass文件
gulp.task('sass',function(){
   return  gulp.src('src/scss/*.scss')
        .pipe(sass({outputStyle:"compact"}))
        .pipe(gulp.dest('src/css'))
        .pipe(reload({stream: true}));
})
// gulp.task('js', function () {
//     return gulp.src('src/**/*.js')
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: "src",
        open: false
    })
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/**/*.html").on('change', reload);
    gulp.watch("src/**/*.js").on("change",reload)
});
// //压缩图片
// gulp.task('imagemin',()=>
//      gulp.src('imgs/*')
//          .pipe(imagemin())
//          .pipe(gulp.dest('src/images'))
// )
gulp.task('build',["server"]);

const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./src/scss/main.scss', {sourcemaps: true})
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('_site/css'));
});


gulp.task('js', function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'));
});



/*
  Watch folders for changes
*/
gulp.task("watch", function() {
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'js'
));


// Levelup Tuts tasks

// function errorLog(error) {
//   console.error.bind(error);
//   this.emit('end');
// }

// // Scripts Task
// // Uglifies
// gulp.task('scripts',function(){
//   gulp.src('./src/js/**/*.js')
//   .pipe(uglify())
//   .on('error', errorLog)
//   .pipe(gulp.dest('_site/js'));
// });

// //Image min Task
// gulp.task('image',function(){
//   gulp.src('./img/*')
//   .pipe(imagemin())
//   .pipe(gulp.dest('_site/img'));
// });


// // Styles Task
// gulp.task('styles', function() {
//   gulp.src('./src/scss/main.scss')
//   .pipe(sass({
//     outputStyle: 'compressed'
//   }))
//   .on('error', errorLog)
//   .pipe(gulp.dest('_site/css'));
// });

// // Watch JS Task
// gulp.task('watch', function() {
//   gulp.watch('./src/js/**/*.js', gulp.parallel('scripts'));
//   gulp.watch('./src/scss/main.scss', gulp.parallel('styles'));
//   gulp.watch('./img/*', gulp.parallel('image'));
// });

// gulp.task('default', gulp.parallel('scripts','styles','image','watch'));
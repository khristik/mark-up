var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var path = 'app/build';

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest(path))
});

gulp.task('js', function () {
  gulp.src('app/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest(path));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['js']);
});


//gulp.task('build', ['sass', 'js']);

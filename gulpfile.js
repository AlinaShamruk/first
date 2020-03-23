const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const { watch, series } = require('gulp');
const image = require('gulp-image');
var webserver = require('gulp-webserver');


gulp.task('minify', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'));
});

gulp.task('css', () => {
  return gulp.src('assets/style/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', () => {
  return gulp.src('assets/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('compress', function () {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('assets/style/*.css', gulp.parallel('css'));
  gulp.watch('*.html', gulp.parallel('minify'));
  gulp.watch('assets/js/*.js', gulp.parallel('js'));
  gulp.watch('assets/js/*.js', gulp.parallel('compress'));
});

gulp.task('image', function () {
  return gulp.src('assets/image/*')
   .pipe(image())
   .pipe(gulp.dest('./build/image'));
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      fallback: 'index.html'
    }));
});



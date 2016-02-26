var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('default', function(){
	console.log('Testing...');
});

gulp.task('minify-css', function() {
  return gulp.src('assets/stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});


gulp.task('minify-js', function() {
  gulp.src('assets/javascript/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

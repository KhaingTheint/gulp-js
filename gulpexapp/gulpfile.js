const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// logs message
gulp.task('message', function(cb) {
 	return console.log("Gulp is running..");
});

gulp.task('default', function(cb) {
 	return console.log("Gulp is running..");
});

// copy html
gulp.task('copyHtml', function() {
 	gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

//imagesMin
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

//Minify JS
gulp.task('minify', function() {
 	gulp.src('src/js/*.js')
 	.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// concat Js file

gulp.task('scripts', function() {
 	gulp.src('src/js/*.js')
 	.pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['message','copyHtml','imageMin','minify','scripts']);

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/images/*.',['imageMin']);
	gulp.watch('src/*.html',['copyHtml']);
})
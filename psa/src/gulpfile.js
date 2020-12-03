var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('css', function() {
	return gulp.src('./home.scss')
		.pipe(sass({
				// outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('../docs/stylesheets/'))
		.pipe(browserSync.stream())
});

gulp.task('browserSync', function(){
	browserSync.init({
		proxy: "localhost:8000",
	});
});

gulp.task('compile', function () {
	browserSync.reload();
});
 
gulp.task('watch', function(){

	gulp.watch('./**/*.scss', gulp.series('css'));
	// gulp.watch('../templates/partial/**/*.twig', gulp.series('compile'))
});

gulp.task('default', gulp.parallel('browserSync','watch', 'css'));

// npm install <-- 
// gulp
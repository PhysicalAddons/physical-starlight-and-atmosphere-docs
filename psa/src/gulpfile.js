var gulp = require('gulp'),
	sass = require('gulp-sass'),
	twig = require('gulp-twig'),
	browserSync = require('browser-sync').create();

gulp.task('css', function() {
	return gulp.src('./home.scss')
		.pipe(sass({
				// outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('../theme-extension/assets/css/'))
		.pipe(browserSync.stream())
});

gulp.task('compile', function (done) {
	// return gulp.src('../theme-extension/index.twig')
	// 	.pipe(twig({data: {}}))
	// 	.pipe(gulp.dest('../theme-extension/'));
	// browserSync.reload();
	// done()
	return gulp.src('./index.twig')
		.pipe(twig({data: {}}))
		.pipe(gulp.dest('./'));
	// browserSync.reload();
	done()
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: "../theme-extension/"
		}
	});
});

gulp.task('compile', function () {
	browserSync.reload();
});
 
gulp.task('watch', function(){

	gulp.watch('./**/*.scss', gulp.series('css'));
	// gulp.watch('../templates/partial/**/*.twig', gulp.series('compile'))
});

gulp.task('default', gulp.parallel('browserSync', 'compile', 'watch', 'css'));

// npm install <-- 
// gulp
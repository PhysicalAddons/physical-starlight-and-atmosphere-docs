var destroot = '../theme-extension/'
var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	twig = require('gulp-twig'),
	responsive = require('gulp-responsive'),
	browserSync = require('browser-sync').create();
	// sass.compiler = require('sass')

gulp.task('css', function() {
	return gulp.src('./home.scss')
		.pipe(sass({
				// outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest(destroot+'assets/css/'))
		.pipe(browserSync.stream())
});

gulp.task('compile', function (done) {
	return gulp.src('./home.twig')
		.pipe(twig({data: {}}))
		.pipe(gulp.dest(destroot+'overrides/'))
		.pipe(gulp.dest(destroot))
		.pipe(browserSync.stream());
	done()
});


gulp.task('browserSync', function(){
	browserSync.init({
		open: false,
		server: {
			baseDir: destroot
		}
	});
});
 
gulp.task('images-presets', function () {
	return gulp
	  .src('images/presets/**/*.jpg')
	  .pipe(
		responsive(
		  {
			'*.jpg': [
			  {
				width: 300,
				rename: { suffix: '-300' }
			  },
			  {
				width: 600,
				rename: { suffix: '-600' }
			  },
			  {
				width: 1200,
				rename: { suffix: '-1200' }
			  },
			  {
				width: 1600,
				rename: { suffix: '-1600' }
			  }
			],
		  },
		  {
			// Global configuration for all images
			// The output quality for JPEG, WebP and TIFF output formats
			quality: 80,
			// Use progressive (interlace) scan for JPEG and PNG output
			progressive: true,
			// Strip all metadata
			withMetadata: false
		  }
		)
	  )
	  .pipe(gulp.dest(destroot+'assets/images/presets'))
  })

gulp.task('watch', function(){
	gulp.watch('./**/*.scss', gulp.series('css'));
	gulp.watch('./**/*.twig', gulp.series('compile'))
});

gulp.task('default', gulp.parallel('browserSync', 'compile', 'watch', 'css'));

// npm install <-- 
// gulp
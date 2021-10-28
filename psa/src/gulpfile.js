var destroot = "../theme-extension/";
var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  twig = require("gulp-twig"),
  responsive = require("gulp-responsive"),
  browserSync = require("browser-sync").create();
// sass.compiler = require('sass')

gulp.task("css", function () {
  return gulp
    .src("./home.scss")
    .pipe(
      sass({
        // outputStyle: 'compressed'
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(destroot + "assets/css/"))
    .pipe(browserSync.stream());
});

gulp.task("compile", function (done) {
  return gulp
    .src("./home.twig")
    .pipe(twig({ data: {} }))
    .pipe(gulp.dest(destroot + "overrides/"))
    .pipe(gulp.dest(destroot))
    .pipe(browserSync.stream());
  done();
});

gulp.task("browserSync", function () {
  browserSync.init({
    open: false,
    server: {
      baseDir: destroot,
    },
  });
});

gulp.task("images-presets", function () {
  return gulp
    .src("images/presets/**/*.jpg")
    .pipe(
      responsive(
        {
          "*.jpg": [
            {
              width: 300,
              rename: { suffix: "-300" },
            },
            {
              width: 600,
              rename: { suffix: "-600" },
            },
            {
              width: 1200,
              rename: { suffix: "-1200" },
            },
            {
              width: 1600,
              rename: { suffix: "-1600" },
            },
          ],
        },
        {
          // Global configuration for all images
          quality: 95,
          progressive: true,
          withMetadata: false,
        }
      )
    )
    .pipe(gulp.dest(destroot + "assets/images/presets"));
});

gulp.task("images-presets", function () {
	return gulp
	  .src("images/presets/*.jpg")
	  .pipe(
		responsive(
		  {
			"*.jpg": [
			  {
				width: 300,
				rename: { suffix: "-300" },
			  },
			  {
				width: 600,
				rename: { suffix: "-600" },
			  },
			  {
				width: 1200,
				rename: { suffix: "-1200" },
			  },
			  {
				width: 1600,
				rename: { suffix: "-1600" },
			  },
			],
		  },
		  {
			// Global configuration for all images
			quality: 95,
			progressive: true,
			withMetadata: false,
		  }
		)
	  )
	  .pipe(gulp.dest(destroot + "assets/images/presets"));
  });

  gulp.task("images-gallery", function () {
	return gulp
	  .src("images/gallery/**/*thumb*.jpg")
	  .pipe(
		responsive(
		  {
			"**/*-thumb.jpg": [
			  {
				width: 147,
				rename: { suffix: "-300" },
			  },
			  {
				width: 285,
				rename: { suffix: "-575" },
			  },
			  {
				width: 424,
				rename: { suffix: "-1704" },
			  },
			],
			"**/*-thumb-2x.jpg": [
				{
				  width: 296,
				  rename: { suffix: "-300" },
				},
				{
				  width: 571,
				  rename: { suffix: "-575" },
				},
				{
				  width: 849,
				  rename: { suffix: "-1704" },
				},
			  ],
		  },
		  {
			// Global configuration for all images
			quality: 95,
			progressive: true,
			withMetadata: false,
		  }
		)
	  )
	  .pipe(gulp.dest(destroot + "assets/images/gallery"));
  });

  gulp.task("images-testimonials", function () {
	return gulp
	  .src("images/testimonials/*.jpg")
	  .pipe(
		responsive(
		  {
			"*.jpg": [
			  {
				width: 100,
				rename: { suffix: "-100" },
			  },
			  {
				width: 200,
				rename: { suffix: "-200" },
			  },
			],
		  },
		  {
			// Global configuration for all images
			quality: 95,
			progressive: true,
			withMetadata: false,
		  }
		)
	  )
	  .pipe(gulp.dest(destroot + "assets/images/testimonials"));
  });

  gulp.task("images-ourstory", function () {
	return gulp
	  .src("images/our-story/*.jpg")
	  .pipe(
		responsive(
		  {
			"*.jpg": [
			  {
				width: 100,
				rename: { suffix: "-200" },
			  },
			  {
				width: 320,
				rename: { suffix: "-320" },
			  },
			  {
				width: 450,
				rename: { suffix: "-450" },
			  },
			  {
				width: 600,
				rename: { suffix: "-600" },
			  },
			],
		  },
		  {
			// Global configuration for all images
			quality: 95,
			progressive: true,
			withMetadata: false,
		  }
		)
	  )
	  .pipe(gulp.dest(destroot + "assets/images/our-story"));
  });


gulp.task("watch", function () {
  gulp.watch("./**/*.scss", gulp.series("css"));
  gulp.watch("./**/*.twig", gulp.series("compile"));
});

gulp.task("default", gulp.parallel("browserSync", "compile", "watch", "css"));

// npm install <--
// gulp

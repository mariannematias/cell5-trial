// including plugins
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const gp_concat = require('gulp-concat')
const csso = require('gulp-csso');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Add css files here
gulp.task('styles', function () {
    return gulp.src(
            [
                './src/vendor/bootstrap/css/bootstrap.min.css',
                './src/vendor/fontawesome-free/css/all.min.css',
                './src/css/normalize.css',
                './src/css/style.css'
            ]
        )
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(gp_concat('style.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))
});

// Copy Webfonts
gulp.task('copy-fonts', function(){
    return gulp.src(
            [
                './src/vendor/fontawesome-free/webfonts/**'
            ]
        )
        .pipe(gulp.dest('./dist/webfonts/'))
})

// Add HTML files here
gulp.task('pages', () => {
    return gulp.src('./src/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./'));
  });


// Add JS files here
gulp.task('scripts', function() {
    return gulp.src(
        [
            './src/vendor/jquery/jquery.min.js',
            './src/vendor/bootstrap/js/bootstrap.bundle.min.js',
            './src/vendor/jquery-easing/jquery.easing.min.js',
            './src/js/scripts.js'
        ]
    )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

// For images
gulp.task('images', function() {
    return gulp.src("./src/images/*")
        .pipe(imagemin()) 
        .pipe(gulp.dest("./dist/images"));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('build', ['clean'], function () {
  runSequence(
    'styles',
    'copy-fonts',
    'scripts',
    'pages',
    'images'
  );
});

gulp.task('watch', function() {
    gulp.watch('src/css/**/*', ['styles']);
    gulp.watch('src/js/**/*', ['scripts']); 
    gulp.watch('src/**/*.html', ['pages']); 
    gulp.watch('src/images/**/*', ['images']);
})
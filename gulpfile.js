
var previewThemeid = '34119319595';
var previewThemeUrl = 'https://bibado.co.uk';
var previewThemeUrl = previewThemeUrl + '/?preview_theme_id=' + previewThemeid;
// /?preview_theme_id=34119319595
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
// var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var pixrem = require('pixrem');
var browserSync = require('browser-sync').create();
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var watch = require('gulp-watch');

/*
 SOURCE FILES
 */
var jsScripts;
var jsPath = 'src/ac/js/'
var jsVendorPath = 'src/vendor/'
var jsCustomScripts = [
    'ac_shopify.js'
    // 'custom.js',
];
var jsVendorScripts = [
    //All ready deprecated with browserify
    // 'jquery/dist/jquery.slim.js',
    'remodal/dist/remodal.min.js',
    'fitvids/jquery.fitvids.js',
    'flickity/dist/flickity.pkgd.js',
    'js-cookie/src/js.cookie.js'
];

for (var i = 0; i < jsVendorScripts.length; i++) {
    //Add the vendor path
    jsVendorScripts[i] = jsVendorPath + jsVendorScripts[i];
}
for (var i = 0; i < jsCustomScripts.length; i++) {
    //Add the default path
    jsCustomScripts[i] = jsPath + jsCustomScripts[i];
}

//Concat the vendor scripts with the custom scripts
jsScripts = jsVendorScripts.concat(jsCustomScripts);



/*
 GULP TASKS
 */

//TASK: log - Just a test
gulp.task('log', function () {
    gutil.log('bleen it to the max');
    gutil.log(jsScripts);
});

//TASK: scripts - Concat and uglify all the vendor and custom javascript
gulp.task('scripts', function (cb) {
    gutil.log(jsScripts);
    pump([
            gulp.src(jsScripts),
            concat('ac.js.liquid'),
            // browserify(),
            // uglify(),
            gulp.dest('src/assets/')
        ],
        cb
    );
});

//TASK: sass - Concat and uglify all the vendor and custom javascript
gulp.task('sass', function (cb) {

    return gulp.src('src/ac/scss/main.scss')
    //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(postcss([ autoprefixer(), cssnano(), pixrem() ]))
        //.pipe(sourcemaps.write('.'))
        .pipe(concat('ac_main.css'))
        .pipe(gulp.dest('dist/assets'))
        .pipe(browserSync.stream());

});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: previewThemeUrl,
        reloadDelay: 5000
    });

    gulp.watch('dist/templates/**/*.liquid').on('change', browserSync.reload);
    gulp.watch('dist/snippets/**/*.liquid').on('change', browserSync.reload);
    gulp.watch('dist/sections/**/*.liquid').on('change', browserSync.reload);
    gulp.watch('dist/layouts/**/*.liquid').on('change', browserSync.reload);
    gulp.watch('src/ac/scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('src/ac/js/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch("src/ac/images/svg/**/*.svg", ['svgstore']).on('change', browserSync.reload);
});

gulp.task('svgstore', function () {
    return gulp
        .src('src/ac/styles/images/svg/**/*.svg')
        .pipe(svgmin(function (file) {
            //var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        //prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(concat('defs.svg.liquid'))
        .pipe(gulp.dest('src/snippets'));
});

gulp.task('stream', function () {
    // Endless stream mode
    gulp.watch('src/ac/scss/**/*.scss', ['sass']);
    gulp.watch('src/ac/js/**/*.js', ['scripts']);
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('src/ac/scss/**/*.scss', ['sass'], function () {
        gulp.src('src/ac/scss/**/*.scss');
    });
});

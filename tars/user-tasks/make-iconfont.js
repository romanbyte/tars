'use strict';

/**
 * Make font-sprite for svg and scss for this sprite
 * Return pipe with scss for sprite
 */

var gulp = tars.packages.gulp;
var tarsConfig = tars.config;
var plumber = tars.packages.plumber;
var notifier = tars.helpers.notifier;
//var browserSync = tars.packages.browserSync;

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


/**
 * Task description
 */
module.exports = function () {

    var fontName = 'font-icons';

    return gulp.task('css:make-iconfont', function (cb) {
        return gulp.src('./markup/' + tars.config.fs.staticFolderName + '/img/font-svg/*.svg')
            .pipe(plumber({
                errorHandler: function (error) {
                    notifier.error('An error occurred while css:make-iconfont.', error);
                }
            }))
            .pipe(iconfontCss({
                fontName: fontName,
                path: './markup/' + tars.config.fs.staticFolderName + '/scss/sprite-generator-templates/scss.font.mustache',
                cssClass: 'font-icon',
                targetPath: '../../scss/sprites-scss/font-sprite.scss',
                fontPath: '../fonts/icons/'
            }))
            .pipe(iconfont({
                fontName: fontName
            }))
            .pipe(gulp.dest('./markup/' + tars.config.fs.staticFolderName + '/fonts/icons/'))
            //.pipe(browserSync.reload({ stream:true }))
            .pipe(
            // You can change text of success message
            notifier.success('css:make-iconfont task has been finished')
        );

        //.pipe(gulp.dest(/* path-string to destination directory. Only directory, not a file! */))

        // If you need to reload browser, uncomment the row below
        // .pipe(browserSync.reload({ stream:true }))
        //.pipe(
        // You can change text of success message
        //   notifier.success('Example task has been finished')
        //);

        // You can return callback, if you can't return pipe
        // cb(null);
    });
};




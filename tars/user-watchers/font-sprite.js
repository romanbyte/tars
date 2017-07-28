'use strict';

var gulp = tars.packages.gulp;
var gutil = tars.packages.gutil;
var chokidar = tars.packages.chokidar;
var watcherLog = tars.helpers.watcherLog;

/**
 * Watcher for images for font sprite (svg)
 */
module.exports = function () {

    if (tars.config.useSVG) {
        return tars.packages.chokidar.watch('markup/' + tars.config.fs.staticFolderName + '/' + tars.config.fs.imagesFolderName + '/font-svg/**/*.svg', {
            ignored: '',
            persistent: true,
            ignoreInitial: true
        }).on('all', function (event, path) {
            tars.helpers.watcherLog(event, path);
            tars.packages.gulp.start('css:make-iconfont');
        });
    } else {
        return;
    }
};
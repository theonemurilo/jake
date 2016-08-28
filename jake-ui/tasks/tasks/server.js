var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config = require('../config/_server.js');


function serverConnect() {
    connect.server({
      port: config.port,
      root: config.root
    });
}

gulp.task('server:connect', serverConnect);

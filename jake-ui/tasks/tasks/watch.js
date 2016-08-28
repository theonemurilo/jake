var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    paths = require('../config/_paths.js');

function sassWatch() {
  gulp.watch(paths.style.watch, function() {
    gulp.run('sass:dev');
  });
}

function serverWatch() {
  gulp.watch([paths.server ], server.restart);
}

gulp.task('watch:server', serverWatch);
gulp.task('watch:sass', sassWatch);

gulp.task('watch', ['watch:sass', 'watch:server']);

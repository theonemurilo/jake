var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

    paths = require('../config/_paths.js')

function sassDev() {
  return gulp.src(paths.style.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.style.dest));
}

gulp.task('sass:dev', sassDev);

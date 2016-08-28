var gulp = require('gulp'),
  requireDir = require('require-dir');

requireDir('./tasks/tasks', { recurse: true});

gulp.task('default', ['build:dev']);

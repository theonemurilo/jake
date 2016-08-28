var gulp = require('gulp'),
    runSequence = require('run-sequence');

function buildDev() {
    runSequence(['sass:dev', 'server:connect'],
                ['watch:sass']);
}

gulp.task('build:dev', buildDev)

//Leaving all the imports for future implementation of PROD profile
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-ruby-sass'),
  uglify = require('gulp-uglify'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  server = require( 'gulp-develop-server' ),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  mainBowerFiles = require('main-bower-files');
  
var paths = {
    scripts: {
      src: 'app/**/*.js',
      dest: 'build/js'
    },
    style: {
      src: 'app/styles/*.scss',
      dest: 'app/styles/theme',
      watch: 'app/**/*.scss'
    },
    index: 'app/index.html',
    server: 'server.js'
};

  // sass task
  gulp.task('sass:compile', function () {
   return sass(paths.style.src, { 
        noCache: true,
        style: "expanded"
        })
      .pipe(gulp.dest(paths.style.dest))
  });
  
  gulp.task('sass:watch', function() {
    gulp.watch(paths.style.watch, function() {
      gulp.run('sass:compile');
    });
  });
  
  gulp.task( 'server:start', function() {
      server.listen( { path: paths.server} );
  });
   
  gulp.task( 'server:watch', function() {
      gulp.watch( [ paths.server ], server.restart );
  });
  
gulp.task('default', ['sass:compile', 'server:start', 'sass:watch', 'server:watch']);
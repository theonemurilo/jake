//TODO: CLEAN THIS FILE

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

module.exports = paths;

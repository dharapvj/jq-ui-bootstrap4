// Compile JQuery UI Bootstrap with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['src-scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          'dist/css/jq-ui-bootstrap.css': 'src-scss/jq-ui-bootstrap/all.scss'
        }
      },
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};

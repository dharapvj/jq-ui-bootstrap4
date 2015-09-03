/*!
 * Jquery UI Bootstrap theme Gruntfile
 * http://dharapvj.github.io/jq-ui-makeover/
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/dharapvj/jq-ui-makeover/blob/master/LICENSE)
 */

module.exports = function (grunt) {
	'use strict';
	// Force use of Unix newlines
	grunt.util.linefeed = '\n';
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
            ' * JQuery UI Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under MIT (https://github.com/dharapvj/jq-ui-makeover/blob/master/LICENSE)\n' +
            ' */\n',
		// Task configuration.
		clean: {
			dist: 'dist',
			docs: 'docs/dist'
		},
		scsslint: {
		  options: {
			config: 'src-scss/jq-ui-bootstrap/.scsslint.yml',
			reporterOutput: 'scss-lint-report.xml'
		  },
		  src: ['src-scss/jq-ui-bootstrap/*.scss']
		},
    cssmin: {
      options: {
        // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
        //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        noAdvanced: true
      },
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      },
      docs: {
        src: 'docs/assets/css/docs.min.css',
        dest: 'docs/assets/css/docs.min.css'
      }
    },
    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 35',
          'Firefox >= 31',
          'Explorer >= 9',
          'iOS >= 7',
          'Opera >= 12',
          'Safari >= 7.1'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/*.css'
      },
      docs: {
        src: 'docs/assets/css/docs.min.css'
      },
      examples: {
        expand: true,
        cwd: 'docs/examples/',
        src: ['**/*.css'],
        dest: 'docs/examples/'
      }
    },
    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },
	csscomb: {
		  options: {
			config: 'src-scss/jq-ui-bootstrap/.csscomb.json'
		  },
		  dist: {
			expand: true,
			cwd: 'dist/css/',
			src: ['*.css', '!*.min.css'],
			dest: 'dist/css/'
		  }
		},
	});
  
    // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies',
    // Exclude Sass compilers. We choose the one to load later on.
    pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass'] });
  require('time-grunt')(grunt);

  
  // Default task.
  grunt.registerTask('default', ['clean']);

  grunt.registerTask('test-scss', ['scsslint']);

  grunt.registerTask('dist-css', ['sass-compile', 'autoprefixer:core', 'usebanner', 'csscomb:dist', 'cssmin:core', 'cssmin:docs']);

  require('./grunt/libsass.js')(grunt);
  grunt.registerTask('sass-compile', ['sass:core']);
};

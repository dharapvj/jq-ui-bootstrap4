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
  });
  
    // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies',
    // Exclude Sass compilers. We choose the one to load later on.
    pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass'] });
  require('time-grunt')(grunt);

  
  // Default task.
  grunt.registerTask('default', ['clean']);
  require('./grunt/libsass.js')(grunt);
  grunt.registerTask('sass-compile', ['sass:core', 'sass:docs']);
};

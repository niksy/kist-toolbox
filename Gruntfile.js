module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		bump: {
			options: {
				files: ['package.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: false
			}
		},

		jscs: {
			main: {
				options: {
					config: '.jscsrc'
				},
				files: {
					src: [
						'src/**/*.js'
					]
				}
			}
		},

		jshint: {
			main: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'src/**/*.js'
				]
			}
		},

		karma: {
			main: {
				configFile: 'karma.conf.js'
			}
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', ['karma:main']);
	grunt.registerTask('stylecheck', ['jshint:main', 'jscs:main']);
	grunt.registerTask('default', ['stylecheck']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};

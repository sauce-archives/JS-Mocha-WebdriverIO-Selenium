'use strict';

module.exports = function (grunt) {
    // configure tasks
    grunt.initConfig({
      shell: {
        runTests: {
            command: function(browser) {
              return 'BROWSER='+browser+' ./node_modules/.bin/parallel-mocha tests/*.js'
            }
        }
      },

      parallel: {
        assets: {
            options: {
                grunt: true
            },
            tasks: ['run_firefox', 'run_chrome', 'run_internet_explorer']
        }
      }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-shell');

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_firefox', ['shell:runTests:firefox']);
    grunt.registerTask('run_chrome', ['shell:runTests:chrome']);
    grunt.registerTask('run_internet_explorer', ['shell:runTests:internet_explorer']);
};
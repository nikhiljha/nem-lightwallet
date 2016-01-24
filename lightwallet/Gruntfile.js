module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    html2js: {
      options: {
        base: '.',
        quoteChar: "'",
        // custom options, see below
        useStrict: true,
        singleModule: true,
        existingModule: true,
        module: 'walletApp',
        amd: true,
        amdPrefixString: `'use strict';
define([
    'definitions'
], function(angular) {
      `,
        amdSuffixString: "});"
      },
      main: {
        src: ['views/**/*.html', 'template/**/*.html'],
        dest: 'templates.js'
      },
    },
  });

  grunt.loadNpmTasks('grunt-html2js');

  // Default task(s).
  grunt.registerTask('default', ['html2js']);
};

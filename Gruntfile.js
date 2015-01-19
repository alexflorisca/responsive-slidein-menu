module.exports = function(grunt) {
    
  'use strict';

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js']
    },

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          relativeAssets: true
        }
      }
    },

    watch: {
      files: ['Gruntfile.js', 'js/**/*.js', 'sass/**/*.scss'],
      tasks: ['compass']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass', 'watch']);

};
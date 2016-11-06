module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    pkgFile: 'package.json',

    karma: {
      unit:{
        configFile: 'karma.conf.js',
      }
    },
    watch: {
      tests: {
        files: 'test/**/*.js',
        tasks: ['karma:dev:run']
      },
      bgtest: {
        // This is just to stop node exiting
        files: 'test/**/*.js',
        tasks: []
      }
    }
  })


  grunt.registerTask('test', ['karma'])
}
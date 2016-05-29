'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    copy: {
      project:{
        expand: true,
        cwd: '.',
        src:['**', '!Gruntfile.js', '!package.json', '!bower.json'],
        dest: 'dist'
      }
    },
    clean:{
      dist:{
        src: 'dist'
      }
    },
    babel:{
      options:{
        sourceMap:true,
        presets:['babel-preset-es2015']
      },
      dist:{
        files: [
            {
                expand: true,
                cwd: 'dist/public/js',
                src: ['*.js'],
                dest: 'dist/public/js'
            },
            {
                expand: true,
                cwd: 'dist/public/js/controllers',
                src: ['*.js'],
                dest: 'dist/public/js/controllers'
            },
            {
                expand: true,
                cwd: 'dist/public/js/services',
                src: ['*.js'],
                dest: 'dist/public/js/services'
            }
        ]
      }
    },
    ngAnnotate:{
      scripts:{
        expand:true,
        src: ['dist/public/js/**/*.js']
      }
    },
    usemin:{
      html: 'dist/app/views/**/*.ejs'
    },
    useminPrepare:{
      options:{
        root: 'dist/public',
        dest: 'dist/public'
      },
      html: 'dist/app/views/**/*.ejs'
    }
  });

  grunt.registerTask('default', ['dist', 'minifica']);
  grunt.registerTask('dist', ['clean', 'copy', 'babel']);
  grunt.registerTask('minifica', ['useminPrepare', 'ngAnnotate', 'concat:generated', 'uglify:generated', 'cssmin:generated', 'usemin']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-ng-annotate');
}

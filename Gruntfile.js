'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    babel:{
      options:{
        sourceMap:true,
        presets:['babel-preset-es2015']
      },
      dist:{
        files: [
            {
                expand: true,
                cwd: 'public/js',
                src: ['*.js'],
                dest: 'public/js'
            },
            {
                expand: true,
                cwd: 'public/js/controllers',
                src: ['*.js'],
                dest: 'public/js/controllers'
            },
            {
                expand: true,
                cwd: 'public/js/services',
                src: ['*.js'],
                dest: 'public/js/services'
            }
        ]
      }
    },
    ngAnnotate:{
      scripts:{
        expand:true,
        src: ['public/js/**/*.js']
      }
    },
    usemin:{
      html: 'app/views/**/*.ejs'
    },
    useminPrepare:{
      options:{
        root: 'public',
        dest: 'public'
      },
      html: 'app/views/**/*.ejs'
    }
  });


  grunt.registerTask('minifica', ['babel','useminPrepare', 'ngAnnotate', 'concat:generated', 'uglify:generated', 'cssmin:generated', 'usemin']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-ng-annotate');
}

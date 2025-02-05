module.exports = function (grunt) {
  grunt.loadTasks('./tasks');

  grunt.initConfig({
    // Clean specified directories
    clean: {
      build: ['./build'],
      tmp: ['./tmp']
    },
    stylelint: {
      css: {
        options: {
          configFile: '.stylelintrc',
          formatter: 'string',
          console: true,
          failOnError: true
        },
        src: ['./src/less/**/*.less']
      }
    },
    // Minify CSS files
    cssmin: {
      options: {
        rebase: false,
        sourceMap: true,
      },
      target: {
        files: [{
          expand: true,
          cwd: './build/skins',
          src: ['**/*.css', '!**/*.min.css'],
          dest: './build/skins',
          ext: '.min.css',
          extDot: 'last'
        }]
      }
    },
    // Watch files for changes and run tasks
    watch: {
      less: {
        files: './src/**/*.less',
        tasks: ['compileLess', 'cssmin']
      },
      html: {
        files: './src/demo/*.html',
        options: {
          livereload: true
        }
      },
      build: {
        files: './build/**/*.*',
        options: {
          livereload: true
        }
      }
    },
    // Process and add styles to the End repository
    'string-replace': {
      copyToEnd: {
        files: [{
          expand: true,
          cwd: './build/skins/ui/wagtail/',
          src: ['skin.css', 'content.min.css'],
          dest: '../../../end/src/assets/tinymce/'
        }],
        options: {
          replacements: [{
            pattern: /\n?\/\*#\s*sourceMappingURL=.*\.map\s*\*\//g,
            replacement: ''
          }]
        }
      }
    }
  });

  // load local grunt tasks
  require('load-grunt-tasks')(grunt);
  // load all grunt tasks from the parent config
  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    pattern: ['grunt-*']
  });

  //
  // Build project and watch LESS file changes
  //
  // grunt.registerTask('css', [
  //   'lint',
  //   'less',
  //   'generateJs',
  //   'minifyCss'
  // ]);
  grunt.registerTask('build', [
    'clean',
    'stylelint',
    'compileLess',
    'cssmin',
    'generateJsSkins',
    'string-replace:copyToEnd'
  ]);

  grunt.registerTask('start', [
    // 'build',
    'buildDemos',
    'copyTinymce',
    'buildSkinSwitcher',
    'connect',
    'watch',
  ]);

  grunt.registerTask('copyToEnd', ['string-replace:copyToEnd']);

  grunt.registerTask('default', ['build', /* 'connect', */ 'watch']);
};

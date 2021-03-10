const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    implementation: sass,
                    sourceMap: true,
                    sourceComments: false
                },
                files: {
                    'assets/css/style.css' : 'assets/scss/base.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions',
                            'IE 10'
                        ]
                    })
                ]
            },
            dist: {
                src: 'style.css',
            },
        },
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass', 'postcss']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['sass', 'postcss:dist', 'watch']);
};

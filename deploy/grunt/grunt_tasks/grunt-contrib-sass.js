 module.exports = function (grunt) {

     grunt.config('sass', {

        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/',
                src: ["**/*.scss"],
                dest: '../../assets/css/',
                ext: '.css'
            }]
        },

     });

     grunt.loadNpmTasks('grunt-contrib-sass');

 };



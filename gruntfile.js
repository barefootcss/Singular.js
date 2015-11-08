module.exports = function(grunt) {

	grunt.initConfig({
   		concat: {
			js: {
				src: [
					'src/polyfills/watch.js',	
					'src/singular.prefix.js',
					'src/modules/core.js',
					'src/modules/http.js',		
					'src/modules/route.js',
					'src/modules/com.js',		
				    'src/singular.suffix.js'  	
				],
				dest: 'builds/singular.full.js'
			}
   		},
	    jshint: {
	      	files: ['builds/singular.full.js'],
	    },   		
   		uglify: {
   			js: {
   				src: 'builds/singular.full.js',
   				dest: 'builds/singular.min.js'
   			},
   		}
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

 	grunt.registerTask('default', ['concat', 'jshint', 'uglify']);
}

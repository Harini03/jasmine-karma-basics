# jasmine-karma-basics

## Steps to run unit tests using jasmine,karma with Coverage report

1. Create a package.json file using '*npm init*' command  																					
2. Run '*npm install karma --save-dev*' to install karma and save it as a dev dependency.  
3. Run '*npm install -g karma-cli*' to run karma in commmand line.  
4. Run '*npm install karma-jasmine --save-dev*' -installs core jasmine as well as karma-jasmine  
5. Run '*npm install karma-chrome-launcher --save-dev*'  
6. Run '*karma init*' -to generate karma-conf.js  
7. We can run unit tests just by giving '*karma start karma.conf.js*' command in command prompt  
8. If we are using grunt for automation,follow the below steps -  
	1.grunt.loadNpmTasks('grunt-karma'); --add this to load the grunt-karma package to run karma with grunt  
	2.karma: {  
      		unit{  
        		configFile: 'karma.conf.js',  
      		}  
    	}, --- add this new config for karma inside initConfig  
	3.grunt.registerTask('test', ['karma'])--add this to register the new task for running karma from grunt as a grunt job  
	4.Now we can run unit test by giving '*grunt test*' command in command prompt  
9. Next comes coverage , add 'coverage' in reporter config, and add a new config  
	coverageReporter: {  
      		type : 'html',  
      		dir : 'coverage/'  
    	},  
10. To see the unit test results in browser-use htmlfile reporter (npm install karma-htmlfile-reporter --save-dev) and follow the below steps  
	1.Add 'html' in reporters config  
	2.htmlReporter: {  
      		outputFile: 'tests/units.html',  
		pageTitle: 'Unit Tests',  
      		subPageTitle: 'A sample project description'  
    	}.-- add this new config  



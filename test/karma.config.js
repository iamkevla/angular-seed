/*globals module */
module.exports = function(config) {
  'use strict';
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath : '../',

    frameworks: ['jasmine'],

    files : [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js',
      'app/js/app.js',
      'test/unit/*Spec.js'
    ],

    // list of files to exclude
    exclude : [],

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots' || 'progress'
    reporter : ['dots','junit'],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // web server port
    port : 9876,

    // cli runner port
    runnerPort : 9100,

    // enable / disable colors in the output (reporters and logs)
    colors : true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel : config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers : ['PhantomJS'],

    // Auto run tests on start (when browsers are captured) and exit
    singleRun : false,

    plugins: [
      // these plugins will be require() by Karma
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ]

  });
};

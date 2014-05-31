module.exports = function(config) {
  'use strict';
  config.set({

    basePath : '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['ng-scenario'],

    files : [
      'test/e2e/*.js'
    ],

    urlRoot : '/__karma__/',

    reporters : ['dots','junit'],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    },

    autoWatch : true,

    browsers : ['PhantomJS'],

    singleRun : false,

    proxies : {
      '/': 'http://localhost:8000/'
    },

    plugins : [
      'karma-ng-scenario',
      'karma-phantomjs-launcher',
      'karma-junit-reporter',
      'karma-chrome-launcher'
    ]
  });
};

basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/*.js'
];

urlRoot = '/__karma__/';

reporters = ['dots','junit'];

junitReporter = {
      // will be resolved to basePath (in the same way as files/exclude patterns)
      outputFile: 'test/e2e.xml',
      suite: 'e2e'
};

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

proxies = {
  '/': 'http://localhost/'
};
basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/*.js'
];

urlRoot = '/__karma__/';

reporters = ['progress'];

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

proxies = {
  '/': 'http://localhost/'
};
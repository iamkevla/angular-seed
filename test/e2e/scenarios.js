'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/');
  });

  it('should have a greeting - Hello from Kevla', function() {
     expect(binding('greeting')).toEqual('Hello from Kevla');  
  });


});

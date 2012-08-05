'use strict';

/* jasmine specs for controllers go here */

describe('Testing a controller with service', function() {

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller(TestCtrl);
    }));

    it('$location dependency should be injected', function() {
        expect(ctrl.location).toBeDefined();
    });
});

describe('MyCtrl1', function(){
  var scope, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller(MyCtrl1, {$scope: scope});
    }));


  it('should have a greeting', function() {
    //spec body
    expect(scope.greeting).toEqual('Hello from Kevla');
  });
});




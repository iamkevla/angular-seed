'use strict';

/* jasmine specs for controllers go here */

describe('Testing a controller with service', function() {

    var scope, ctrl;

    beforeEach(inject(function( $controller ) {
        ctrl = $controller(TestCtrl, {$scope: scope, $location: location});
    }));

    it('$location dependency should be injected', function() {
        expect(ctrl.location).toBeDefined();
    });
});


describe('MainCtrl', function(){
  
    var scope, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller(MainCtrl, {$scope: scope});
    }));

    it('should have a greeting', function() {
      expect(scope.greeting).toEqual('Hello from Kevla');
    });

    it('should have yourname default to ""', function(){
      expect(scope.yourname).toEqual('');
    });



});




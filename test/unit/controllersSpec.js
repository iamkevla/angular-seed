'use strict';

/* jasmine specs for controllers go here */
describe('Testing a controller with service', function() {

    beforeEach(module('myApp'));

    var scope, ctrl, location;


    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      location = {};
      ctrl = $controller('TestCtrl', {
        $location: location
      });
    }));


    it('$location dependency should be injected', function() {
        expect(ctrl.location).toBeDefined();
    });
});

describe('MainCtrl', function(){
  
  beforeEach(module('myApp'));

    var scope, ctrl, location;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $location ) {
      location = {};
      location.absUrl = function(){ return '/angular-seed/app/'; };
      scope = $rootScope.$new();
      ctrl = $controller( 'MainCtrl', {$scope: scope, $location: location });
    }));

    it('should have a greeting', function() {
      expect(scope.greeting).toBe('Hello from Kevla');
    });

    it('should have yourname default to ""', function(){
      expect(scope.yourname).toBe('');
    });

    it('should be able to get absolute url from mocked location', function(){
      expect(location.absUrl()).toBe('/angular-seed/app/');
    });



});

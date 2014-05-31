'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('TestCtrl', ['$location', function($location){
  this.location = $location;
}]);

myApp.controller('MainCtrl',['$scope', function ($scope) {
	// initialise
	$scope.greeting = 'Hello from Kevla';
	$scope.yourname = '';
}]);

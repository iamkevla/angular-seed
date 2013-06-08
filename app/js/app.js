'use strict';

/* Controllers */
function TestCtrl($location) {
	this.location = $location;
}

function MainCtrl($scope, $location) {
	// initialise
	$scope.greeting = 'Hello from Kevla';
	$scope.yourname = '';
}
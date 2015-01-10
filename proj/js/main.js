"use strict";

var notebookApp = angular.module('notebookApp' , ['ngRoute']);

notebookApp.config(function ($routeProvider) {
	$routeProvider
		.when('/plate', {
			templateUrl: '/views/plate.html'
		})
		.when('/list', {
			templateUrl: 'views/list.html'
		})
		.when('/add', {
			templateUrl: 'views/add.html'
		})
		.otherwise({redirectTo: '/plate'})
});
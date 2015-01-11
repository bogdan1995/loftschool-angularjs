"use strict";

var notebookApp = angular.module('notebookApp' , ['ngRoute', 'firebase']);

notebookApp.value('fbURL', 'https://angular-homework.firebaseio.com/');

notebookApp.config(function ($routeProvider) {
	$routeProvider
		.when('/view', {
			templateUrl: 'views/list.html',
			controller: 'ViewCtrl'
		})
		.when('/add', {
			templateUrl: 'views/add.html'
		})
		.otherwise({redirectTo: '/view'})
});
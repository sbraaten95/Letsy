var app = angular.module('app', ['ngRoute']);

app.config(($routeProvider)=>{
	$routeProvider.when('/', {
		controller: 'homeControl',
		templateUrl: 'partials/home.html'
	}).otherwise({
		redirectTo: '/'
	});
});
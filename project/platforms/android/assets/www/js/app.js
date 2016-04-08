
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/main.html',
				controller: 'Principal'
			}).
			when('/photos/:id', {
				templateUrl: 'views/photosDetail.html',
				controller: 'PhotosController'
			}).
			when('/add/', {
				templateUrl: 'views/add.html',
				controller: 'PhotosController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);


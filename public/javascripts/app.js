angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: IndexCtrl
            }).
            when('/users', {
                templateUrl: 'partials/addPost',
                controller: AddPostCtrl
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);
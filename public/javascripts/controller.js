function ReadPostCtrl($scope, $http, $routeParams) {
  	$http.get('/users/' + $routeParams.id).
    	success(function(data) {
      	$scope.post = data.post;
    });
}
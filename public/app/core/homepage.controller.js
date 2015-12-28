
'user script'

app.factory('Reservations', ['$resource', function($resource){
      return $resource('/reservations/:id', null, {
        'update': { method:'PUT' }
      });
    }])
	.factory('Restaurants', ['$resource', function($resource){
      return $resource('/restaurants/:id', null, {
        'update': { method:'PUT' }
      });
    }])

    .controller('Controller', ['$scope', 'Reservations', function ($scope, Reservations) {
    	$scope.currentPage= 'home';
      	$scope.reservations = Reservations.query();

      	$scope.changePage = function(path){
      		$scope.currentPage = path;
      	}

    }])
    .controller('ReservationController', ['$scope', 'Reservations', function ($scope, Reservations) {
      	$scope.save = function(){
    		if(!$scope.newReservation || $scope.newReservation.length < 1) return;
    		var reservation = new Reservations({ name: $scope.newReservation, completed: false });
        	reservation.$save(function(){
	          $scope.reservations.push(reservation);
	          $scope.newReservation = ''; // clear textbox
	          console.log($scope.reservations)
	        });
	    }
	    $scope.update = function(index){
             var reservation = $scope.reservations[index];
             reservations.update({id: reservation._id}, reservation);
             $scope.editing[index] = false;
           }
 
           $scope.edit = function(index){
             $scope.editing[index] = angular.copy($scope.reservations[index]);
           }
 
           $scope.cancel = function(index){
             $scope.reservations[index] = angular.copy($scope.editing[index]);
             $scope.editing[index] = false;
           }

          $scope.remove = function(index){
           var reservation = $scope.reservations[index];
           Reservations.remove({id: reservation._id}, function(){
              $scope.todos.splice(index, 1);
            });
          }

    }])
	.controller('RestaurantController', ['$scope', 'Restaurants', function($scope, Restaurants){
		$scope.restaurants = Restaurants.query();
      	$scope.save = function(){
      		console.log($scope.restaurants);
    		if(!$scope.newRestaurant || $scope.newRestaurant.length < 1) return;
    		var restaurant = new Restaurants({ name: $scope.newRestaurant, completed: false });
        	restaurant.$save(function(){
	          $scope.restaurants.push(restaurant);
	          $scope.newRestaurant = ''; // clear textbox
	          console.log($scope.restaurants)
	        });
	    }
	    $scope.update = function(index){
             var restaurant = $scope.restaurants[index];
             restaurants.update({id: restaurant._id}, restaurant);
             $scope.editing[index] = false;
           }
 
           $scope.edit = function(index){
             $scope.editing[index] = angular.copy($scope.restaurants[index]);
           }
 
           $scope.cancel = function(index){
             $scope.restaurants[index] = angular.copy($scope.editing[index]);
             $scope.editing[index] = false;
           }

          $scope.remove = function(index){
           var restaurant = $scope.restaurants[index];
           restaurants.remove({id: restaurant._id}, function(){
              $scope.restaurants.splice(index, 1);
            });
          }

	}])
	.config(['$routeProvider', function ($routeProvider) {
       $routeProvider
         .when('/', {
           templateUrl: '/todos.html',
           controller: 'Controller'
         })

         .when('/:id', {
           templateUrl: '/todoDetails.html',
           controller: 'TodoDetailCtrl'
        });
     }]);

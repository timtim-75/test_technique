
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

    .controller('Controller', ['$scope', function ($scope) {
    	$scope.currentPage= 'home';
    	$scope.currentRestaurant = {};
      	$scope.hour = '00';
      	$scope.minute = '00';
      	$scope.day = '01';
      	$scope.month = '01';
      	$scope.year = '2016';
      	$scope.capacity = '1';

      	$scope.changePage = function(path, restaurant){
      		$scope.currentPage = path;
      		$scope.currentRestaurant = restaurant;

      		console.log($scope.currentPage);
      	}

    }])
    .controller('ReservationController', ['$scope', 'Reservations', function ($scope, Reservations) {
    	$scope.clientName = '';
    	$scope.clientNumber = '';
    	$scope.newReservation = {};
    	$scope.reservations = Reservations.query();
    	console.log($scope.reservations);
      	$scope.save = function(){
    		if(!$scope.newReservation || $scope.newReservation.length < 1) return;
    		var date = $scope.day + '/' + $scope.month + '/' + $scope.year;
    		var hour = $scope.hour + 'h' + $scope.minute;
    		var reservation = new Reservations({ 
    			restaurant: $scope.currentRestaurant._id,
    			date: date,
    			hour: hour,
    			number: $scope.capacity,
    			clientName: $scope.clientName,
    			clientNumber: $scope.clientNumber
    		});
    		console.log(reservation);
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
		$scope.newRestaurant = {};
      	$scope.save = function(){
    		if(!$scope.newRestaurant || $scope.newRestaurant.length < 1) return;
    		var restaurant = new Restaurants({ 
    			name: $scope.newRestaurant.name, 
    			address: $scope.newRestaurant.address, 
    			capacity: $scope.newRestaurant.capacity
    		});

        	restaurant.$save(function(){
	          $scope.restaurants.push(restaurant);
	          $scope.newRestaurant = ''; // clear textbox
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
       		Restaurants.remove({id: restaurant._id}, function(){
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

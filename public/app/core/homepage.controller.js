
'user script'

// app.controller('HomepageCtrl', function($scope, $http){
// 	$scope.formData = {};
// 	$http.get('/todos')
//         .success(function(data) {
//             $scope.todos = data;
//             console.log($scope.todos);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });

//     // when submitting the add form, send the text to the node API
//     $scope.createTodo = function() {
//     	console.log($scope.formData);
//     	var todo = {name :$scope.formData, completed:false, note:''};
//         $http.post('/todos', todo)
//             .success(function(data) {
//                 $scope.formData = {}; // clear the form so our user is ready to enter another
//                 $scope.todos = data;
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };

//     // delete a todo after checking it
//     $scope.deleteTodo = function(id) {
//         $http.delete('/todos/' + id)
//             .success(function(data) {
//                 $scope.todos = data;
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };

//     $http.get('/users')
//         .success(function(data) {
//             $scope.todos = data;
//             console.log($scope.todos);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });

//     // when submitting the add form, send the text to the node API
//     $scope.createUser = function() {

//         $http.post('/users', $scope.formData)
//             .success(function(data) {
//                 $scope.formData = {}; // clear the form so our user is ready to enter another
//                 $scope.todos = data;
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };

//     // delete a todo after checking it
//     $scope.deleteTodo = function(id) {
//         $http.delete('/users/' + id)
//             .success(function(data) {
//                 $scope.todos = data;
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };
// })
// 


app.factory('Todos', ['$resource', function($resource){
          return $resource('/todos/:id', null, {
            'update': { method:'PUT' }
          });
        }])

        .controller('HomepageCtrl', ['$scope', 'Todos', function ($scope, Todos) {
          	$scope.todos = Todos.query();
          	$scope.save = function(){
        		if(!$scope.newTodo || $scope.newTodo.length < 1) return;
        		var todo = new Todos({ name: $scope.newTodo, completed: false });
	        	todo.$save(function(){
		          $scope.todos.push(todo);
		          $scope.newTodo = ''; // clear textbox
		        });
		    }
		    $scope.update = function(index){
	             var todo = $scope.todos[index];
	             Todos.update({id: todo._id}, todo);
	             $scope.editing[index] = false;
	           }
	 
	           $scope.edit = function(index){
	             $scope.editing[index] = angular.copy($scope.todos[index]);
	           }
	 
	           $scope.cancel = function(index){
	             $scope.todos[index] = angular.copy($scope.editing[index]);
	             $scope.editing[index] = false;
	           }
	
	          $scope.remove = function(index){
	           var todo = $scope.todos[index];
	           Todos.remove({id: todo._id}, function(){
	              $scope.todos.splice(index, 1);
	            });
	          }

        }])
    .config(['$routeProvider', function ($routeProvider) {
           $routeProvider
             .when('/', {
               templateUrl: '/todos.html',
               controller: 'HomepageCtrl'
             })
 
             .when('/:id', {
               templateUrl: '/todoDetails.html',
               controller: 'TodoDetailCtrl'
            });
         }]);

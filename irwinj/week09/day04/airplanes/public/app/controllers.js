var airplaneCtrls = angular.module('AirplaneCtrls', ['AirplaneServices', 'ngAnimate']);

airplaneCtrls.controller('HomeCtrl', ['$scope', '$routeParams', 'Airplane', function ($scope, $routeParams, Airplane){
  	$scope.showContainer = true;
	$scope.airplanes = [];
	$scope.search = {}
  	$scope.searchBy = '$'
	Airplane.query(function success (data){
		$scope.airplanes = data;
 	 		$scope.removeItem = function() {
   			$scope.airplanes.splice($scope.airplanes.length-1, 1);
  			};
  			$scope.toggleContainer = function() {
    		$scope.showContainer = !$scope.showContainer;
  		}
		console.log(data);
	}, function error (data){
		console.log(data)
	});
}])
.controller('AirplaneShowCtrl', ['$scope', '$routeParams', 'Airplane', function ($scope, $routeParams, Airplane){
      $scope.airplane = {};
      Airplane.get(
        {id: $routeParams.id},
        function success(data){
          $scope.airplane = data;
        },
        function error(data){
          console.log(data);
        });
    }])
.controller('NewAirplaneCtrl', ['$scope', '$location', 'Airplane', function ($scope, $location, Airplane) {
      $scope.airplane = {
        manufacturer: '',
        model: '',
        engines: '',
        image: ''
      };

      $scope.createAirplane = function() {
        Airplane.save($scope.airplane, function success(data) {
        $location.path('/');
      }, function error(data) {
        console.log(data);
      });
    }
}])
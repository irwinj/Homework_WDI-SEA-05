var airplaneServices = angular.module('AirplaneServices', ['ngResource']);

airplaneServices.factory('Airplane', ['$resource', function ($resource){
	return $resource('http://localhost:3000/api/airplanes/:id');
}]);
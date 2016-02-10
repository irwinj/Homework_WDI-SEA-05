var app = angular.module('Reddit', []);
console.log('this file is running.');

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searches = [];

	$scope.search = function() {
		console.log($scope.searches);
		$scope.searches.push($scope.searchTerm);
		var req = {
			url: "http://www.reddit.com/search.json",
			method: 'GET',
			params: {
				q: $scope.searchTerm
			}
		}

		$http(req).then(function success(res) {

			// console.log(res);
			results = res.data.data.children;

			console.log(results);
		}, function error(res) {
			console.log(res);
		});
	};
}]);
var app = angular.module('AlexApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'PageCtrl'
  })
  .when('/about', {
    templateUrl: '/views/about.html'
  })
  .when('/development',{
  	templateUrl:'views/development.html'
  })
  .when('/advertising',{
    templateUrl:'views/advertising.html'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);

app.controller('PageCtrl', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
  $scope.navCollapsed = true;

}]);
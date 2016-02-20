var app = angular.module('BlogApp', ['ngRoute', 'PostCtrls', 'PostServices','ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'app/views/posts.html',
    controller: 'HomeCtrl'
  })
  .when('/posts/new', {
    templateUrl: 'app/views/newPost.html',
    controller: 'NewCtrl'
  })
  .when('/post/:id', {
    templateUrl: 'app/views/showPost.html',
    controller: 'ShowCtrl'
  })
  .when('/signup', {
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .when('/login', {
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]).run(['$rootScope', 'Auth', function($rootScope, Auth) {
  $rootScope.isLoggedIn = function() {
    return Auth.isLoggedIn.apply(Auth);
  }
}]);
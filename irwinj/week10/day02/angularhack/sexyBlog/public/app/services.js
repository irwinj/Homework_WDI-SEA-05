angular.module('PostServices', ['ngResource'])
.factory('Post', ['$resource', 'Auth', function($resource, Auth) {
  return $resource('http://localhost:3000/api/posts/:id');
}])
.factory('Auth', ['$window', '$rootScope', function($window, $rootScope) {
  return {
    saveUser: function(user) {
      if(user) {
        console.log(user);
        $window.localStorage['secretposts-token'] = JSON.stringify(user);
      }
    },
    getUser: function() {
        try {
          var userJSON = $window.localStorage['secretposts-token'];
          if(userJSON) {
            return JSON.parse(userJSON);
          }
        } catch (err) {
          console.log(err);
        }
    },
    removeUser: function() {
      $window.localStorage.removeItem('secretposts-token');
    },
    isLoggedIn: function() {
      var user = this.getUser();
      return user ? true : false;
    },
    currentUser: function() {
      if(this.isLoggedIn()) {
        var user = this.getUser();
        return user;
      }
    }
  }
}])

.factory('AuthInterceptor', ['Auth', function(Auth) {
  return {
    request: function(config) {
      var token = Auth.getUser();
      if(token) {
        config.headers.Authorization = 'Bearer' + token;
      }
      return config;
    }
  }
}])

.factory('Alerts', function() {
  var alerts = [];

  return {
    clear: function() {
      alerts = [];
    },
    add: function(type, msg) {
      alerts.push( {type: type, msg: msg});
    },
    get: function() {
      return alerts;
    },
    remove: function(idx) {
      alerts.splice(idx, 1);
    }
  }
});



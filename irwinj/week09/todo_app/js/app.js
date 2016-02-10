var todo_app = angular.module('ToDo', []);

todo_app.controller('ToDoControl', ['$scope', function($scope) {
	$scope.list=['Enter a list item']
	$scope.lists= [];

	$scope.addTask=function(){
		$scope.lists.push($scope.todo);
		$scope.todo = '';
	}

	$scope.deleteTodo = function(){
		console.log(this);
		$scope.todos.splice(this.$index, 1);
	}

	$scope.editTodo = function() {
		console.log(this);
		var newValue = prompt('Enter a new value');
		this.item = newValue;
	}
}]);
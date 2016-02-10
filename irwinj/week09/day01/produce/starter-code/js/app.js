var app = angular.module('VegApp', []);

//debug stuff to show the app is loading and fruit / veggies are available

console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);
var produces = [];
for (var i = 0; i < fruit.length; i++){
	produces.push(fruit[i]);
}
for (var i = 0; i < vegetables.length; i++){
	produces.push(vegetables[i]);
}
var shuffled = shuffle(produces);
var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

app.controller('GameCtrl', ['$scope', function($scope){
	fruits = [];
	veggies = [];

	$scope.veggies = veggies;
	$scope.fruits = fruits;
	$scope.produces = shuffled;

	var isEmpty = function(shuffled) {
		if (shuffled < 1){
			return true;
		}
	}


	$scope.isVegetable = function(produce)	{
		veggies.push(produce);
		shuffled.splice(shuffled.indexOf(produce), 1);
		isEmpty(shuffled);
	}

	$scope.isFruit = function(produce)	{
		fruits.push(produce);
		shuffled.splice(shuffled.indexOf(produce), 1);
		isEmpty(shuffled);
	}

	$scope.notFruit = function(fruit)	{
		shuffled.push(fruit);
		fruits.splice(fruits.indexOf(fruit), 1);
	}

	$scope.notVegetable = function(vegetable)	{
		shuffled.push(vegetable);
		veggies.splice(veggies.indexOf(vegetable), 1);
	}

}]);













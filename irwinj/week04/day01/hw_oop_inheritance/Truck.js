var Car = require('./Car.js');

function Truck(make,model,year,color,seats,capacity){
  this.capacity = capacity || 0;
  this.seats = 3;
  Car.call(this, make, model, year, color, seats);
}
  


Truck.prototype = new Car();
Truck.prototype.constructor = Truck;

Truck.prototype.load = function (pounds) {
  if(pounds  this.capacity <= this.capacity){
    console.log('loaded '  pounds  'lbs of cargo');
    pounds = this.capacity;
    return true;
  } else {
    return false;
  }
}

Truck.prototype.unload = function (pounds) {
  if(pounds > this.capacity){
    return false;
  } else {
  pounds = this.capacity - pounds;
  return true;

  }
}

module.exports = Truck; 

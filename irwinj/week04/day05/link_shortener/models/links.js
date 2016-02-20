'use strict';
module.exports = function(sequelize, DataTypes) {
  var links = sequelize.define('links', {
    URL: DataTypes.STRING,
    hash: DataTypes.STRING,
    accessCount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      shortUrl: function() { 
        return "http://localhost:3000/g/" + this.hash;
      },
      addToCounter: function() {
        this.accessCount++;
      }
    }
  });
  return links;
};
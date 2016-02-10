'use strict';
module.exports = function(sequelize, DataTypes) {
  var movie = sequelize.define('movie', {
    imdbid: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return movie;
};
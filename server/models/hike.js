'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hike = sequelize.define('Hike', {
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {});
  Hike.associate = function(models) {
    // associations can be defined here
  };
  return Hike;
};
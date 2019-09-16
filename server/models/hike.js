'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hike = sequelize.define('Hike', {
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {});
  Hike.associate = function(models) {
    // associations can be defined here
  };
  return Hike;
};
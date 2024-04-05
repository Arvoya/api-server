const pranayama = (sequelize, DataTypes) =>
  sequelize.define("pranayama", {
    name: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    rounds: DataTypes.INTEGER,
  });

module.exports = pranayama;

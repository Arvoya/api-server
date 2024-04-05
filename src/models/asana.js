const asana = (sequelize, DataTypes) =>
  sequelize.define("asana", {
    name: DataTypes.STRING,
    standing: DataTypes.BOOLEAN,
    sitting: DataTypes.BOOLEAN,
  });

module.exports = asana;

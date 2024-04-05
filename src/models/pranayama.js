const pranayama = (sequelize, DataTypes) =>
  sequelize.define("pranayama", {
    name: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    rounds: DataTypes.INTEGER,
    yogiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = pranayama;

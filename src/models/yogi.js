const yogi = (sequelize, DataTypes) =>
  sequelize.define("yogi", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = yogi;

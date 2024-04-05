const asana = (sequelize, DataTypes) => {
  return sequelize.define("asana", {
    name: DataTypes.STRING,
    standing: DataTypes.BOOLEAN,
    sitting: DataTypes.BOOLEAN,
    yogiID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = asana;

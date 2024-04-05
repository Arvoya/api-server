require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:";
const Collection = require("./Collection");
const pranayamaSchema = require("./pranayama");
const asanaSchema = require("./asana");
const yogiSchema = require("./yogi");

const sequelize = new Sequelize(DATABASE_URL);

const Yogi = yogiSchema(sequelize, DataTypes);
const Asana = asanaSchema(sequelize, DataTypes);
const Pranayama = pranayamaSchema(sequelize, DataTypes);

Yogi.hasMany(Asana, { foreignKey: "yogiID", sourceKey: "id" });
Yogi.hasMany(Pranayama, { foreignKey: "yogiID", sourceKey: "id" });

Asana.belongsTo(Yogi, { foreignKey: "yogiID", targetKey: "id" });
Pranayama.belongsTo(Yogi, { foreignKey: "yogiID", targetKey: "id" });

module.exports = {
  Collection,
  Yogi,
  Asana,
  Pranayama,
  sequelize,
};

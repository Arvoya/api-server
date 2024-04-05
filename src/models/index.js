require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:";
const pranayamaSchema = require("./pranayama");
const asanaSchema = require("./asana");

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  pranayama: pranayamaSchema(sequelize, DataTypes),
  asana: asanaSchema(sequelize, DataTypes),
  sequelize,
};

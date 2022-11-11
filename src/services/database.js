import config from "../config/database.js";
import { Sequelize } from "sequelize";

const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  // logging: false,
});

export default db;

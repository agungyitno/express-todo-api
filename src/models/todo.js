import db from "../services/database.js";
import { DataTypes } from "sequelize";

const todo = db.define(
  "todo",
  {
    name: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    finish_date: {
      type: DataTypes.DATE,
    },
  },
  { createdAt: "created_at", updatedAt: "updated_at" }
);

export default todo;

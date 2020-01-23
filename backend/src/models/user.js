import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const { DataTypes } = Sequelize;

const User = sequelize.define(
  'user',
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  },
  { freezeTableName: true, timestamps: false }
);

export default User;

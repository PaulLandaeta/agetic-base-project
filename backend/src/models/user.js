import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Ingreso from './ingresos';
import Egreso from './egresos';

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
User.hasMany(Ingreso);
User.hasMany(Egreso);
export default User;

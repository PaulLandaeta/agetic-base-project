import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Ingreso from './ingresos'
import Egreso from './egresos'
const { DataTypes } = Sequelize;

const Categoria = sequelize.define(
  'Categoria',
  {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    type: DataTypes.BOOLEAN
  },
  { freezeTableName: true, timestamps: false }
);

Categoria.hasMany(Ingreso);
Categoria.hasMany(Egreso);

export default Categoria;

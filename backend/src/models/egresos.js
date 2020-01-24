import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const { DataTypes } = Sequelize;

const Egreso = sequelize.define(
  'Egresos',
  {
    monto: DataTypes.DOUBLE,
    created: DataTypes.DATE,
    userId: {
        type: Sequelize.INTEGER,
        references: 'user', 
        referencesKey: 'id' 
    },
    catId: {
      type: Sequelize.INTEGER,
      references: 'Categoria', 
      referencesKey: 'id' 
  }
  },
  { freezeTableName: true, timestamps: false }
);

export default Egreso;

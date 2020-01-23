import Sequelize from 'sequelize'
import { config } from '../config'

const { db } = config

export const sequelize = new Sequelize(db.database, db.username, db.password, {host:db.host,dialect: db.dialect});

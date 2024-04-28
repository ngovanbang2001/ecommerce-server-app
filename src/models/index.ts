import { Sequelize, DataTypes } from 'sequelize'
import fs from 'fs'
import path from 'path'
import process from 'process'
import config from '../config/config.json'

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'

const db: any = {}

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = import(path.join(__dirname, file)).then(module => module.default(sequelize, DataTypes))
    let modelName;
    model.then(model => modelName = model.name)
    db[modelName] = model
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const mainConfig = require('../../config/main/sequelize.config')
const logConfig = require('../../config/log/sequelize.config')

db.main = new Sequelize(mainConfig)
db.log = new Sequelize(logConfig)

fs
  .readdirSync(__dirname + '/main')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/main', file))(db.main, Sequelize.DataTypes);
    db[model.name] = model;
  });

fs
  .readdirSync(__dirname + '/log')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/log', file))(db.log, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

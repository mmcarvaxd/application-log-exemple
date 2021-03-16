const config = require('../environment.config')
let sequelizeConfig = {
    dialect: config.DB_MAIN_DIALECT,
    logging: config.DB_MAIN_LOGGING === 'true' ? console.log : false,
    dialectOptions: {
        multipleStatements: true
    },
    storage: config.DB_MAIN_STORAGE
}

module.exports = sequelizeConfig


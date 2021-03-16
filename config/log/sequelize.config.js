const config = require('../environment.config')
let sequelizeConfig = {
    dialect: config.DB_LOG_DIALECT,
    logging: config.DB_LOG_LOGGING === 'true' ? console.log : false,
    dialectOptions: {
        multipleStatements: true
    },
    storage: config.DB_LOG_STORAGE
}

module.exports = sequelizeConfig


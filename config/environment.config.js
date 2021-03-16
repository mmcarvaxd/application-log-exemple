const config = require('dotenv').config().parsed

module.exports = {
    DB_MAIN_DIALECT: config.DB_MAIN_DIALECT,
    DB_MAIN_LOGGING: config.DB_MAIN_LOGGING,
    DB_MAIN_STORAGE: config.DB_MAIN_STORAGE,
    DB_LOG_DIALECT: config.DB_LOG_DIALECT,
    DB_LOG_LOGGING: config.DB_LOG_LOGGING,
    DB_LOG_STORAGE: config.DB_LOG_STORAGE,
    API_TOKEN_SECRET: config.API_TOKEN_SECRET,
    PORT: config.PORT
}
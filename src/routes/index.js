const routes = require('express').Router();
const registerRouters = require('./register')
const authenticateRouters = require('./authenticate')
const userRouters = require('./user')

routes.use('/register', registerRouters);
routes.use('/authenticate', authenticateRouters);
routes.use('/user', userRouters);

module.exports = routes;
const routes = require('express').Router();
const { User } = require('../models')

routes.post('/', async (req, res) => {
    let user = await User.create(req.body)




    res.status(200).json(user);
});

module.exports = routes
const routes = require('express').Router();
const { User } = require('../models')
const jwt = require('jsonwebtoken')

routes.post('/', async (req, res) => {
    let user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(user.password === req.body.password) {
        let token = jwt.sign({ name: user.name, id: user.id, email: user.email }, "secret", {
            expiresIn: "2d"
        })

        await User.update({token}, {
            where: {
                id: user.id
            }
        })

        user = user.dataValues
        user.token = token

        delete user.password
        
        res.status(200).json(user);
    }

});

module.exports = routes
module.exports = async (req, res, next) => {
    const { User } = require('../models')
    const jwt = require('jsonwebtoken')

    let token = req.headers.token

    if(!token) {
        return res.status(401).send('Token não enviado')
    }
    let decoded = {}
    try {
        decoded = jwt.decode(token, 'secret')
    } catch (e) {
        return res.status(401).send('Token inválido')
    }

    let user = await User.findOne({
        where: {
            token: token,
            id: decoded.id
        }
    })

    if(!user) {
        return res.status(401).send('Token inválido')
    }

    req.user = user

    return next()
}
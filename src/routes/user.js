const routes = require('express').Router();
const validate = require('../middleware/validate-session')
const { User, UserLog } = require('../models')

routes.use(validate)
routes.put('/', async (req, res) => {

    let oldUser = await User.findOne({
        where: {
            id: req.body.id
        }
    })

    let user = await User.update(req.body, {
        where: {id: req.body.id}
    })

    let ip = req.headers['x-forwarded-for'] || req.ip
    let keys = Object.keys(req.body)
    let log = []

    keys.forEach(key => {
        let userLog = {
            user_affected_id: req.body.id,
            user_actor_id: req.user.id,
            user_ip: ip,
            action_id: 1,
        }

        if(req.body[key] !== oldUser[key]) {
            userLog.before = `${key}: ${oldUser[key]}`
            userLog.after = `${key}: ${req.body[key]}`
            log.push(userLog)
        }

    })

    await UserLog.bulkCreate(log)

    res.status(200).json(user);
});

module.exports = routes
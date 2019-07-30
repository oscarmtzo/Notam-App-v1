const express = require('express')
const router = express.Router()
const passport = require('../configs/passport')
const User = require('../models/User')
const { createToken, verifyToken } = require('../configs/jwt')

router.post('/signup', (req, res, next) => {
    User.register({ ...req.body }, req.body.password)
    .then(registeredUser => res.status(201).json({ registeredUser }))
    .catch(err =>  res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    // Passport pone al usuario loggeado en "req.user"
    const [header, payload, signature] = createToken(req.user)
    res.cookie('headload', header + '.' + payload, {
        // secure: true,
        // maxAge: 1000 * 60 * 60 * 24
    })
    res.cookie('signature', signature, {
        // secure: true,
        // httpOnly: true
    })
    res.status(200).json({ user: req.user, msg: 'You logged in' })
})

router.get('/logout', (req, res, next) => {
    res.clearCookie('headload')
    res.clearCookie('signature')
    res.status(200).json({ msg: 'You logged out' })
})

router.get('/profile', verifyToken, (req, res, next) => {
   res.status(200).json({ msg: 'Si tienes permisos', user: req.user })
})




module.exports = router
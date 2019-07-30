const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.createToken = user => {
    return jwt.sign({
        userId: user._id,
        name: user.name,
        email: user.email
    }, 
        process.env.SECRET, 
        { expiresIn: '24 h' }
    ).split('.')
}

exports.verifyToken = (req, res, next) => {
    const { headload, signature } = req.cookies
    if (!headload || !signature) return res.status(401).json({ msg: 'Unauthorized, missing token' })
    jwt.verify(headload + '.' + signature, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ err })
        User.findById(decoded.userId)
        .then(user => {
            req.user = user
            next()
        })
        .catch(err => {
            return res.status(401).json({ err })
        })
    }) 
}
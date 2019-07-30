const Airport = require('../models/Airport')

exports.createAirport = (req, res, next) => {
    Airport.create({... req.body})
    .then(airport => res.status(201).json({airport, msg: 'El aeropuerto se ha creado'}))
    .catch(err => res.status(500).json({err, msg: 'aeropuertto no creado'}))
}

exports.getAllAirports = (req, res, next) => {
    Airport.find()
    .then(airports => res.status(200).json({airports}))
    .catch(err => res.status(500).json({err}))
}

exports.getOneAirport = (req, res, next) => {
    const { id } = req.params
    Airport.findById(id)
        .then(airport => res.status(200).json({airport}))
        .catch(err => res.status(500).json({err}))
}

exports.updateAirport = (req, res, next) => {
    const{ id } = req.params
    Airport.findByIdAndUpdate( id, { ...req.body }, { new: true} ) 
        .then(airport => res.status(200).json({airport}))
        .catch(err => res.status(500).json({err}))
}

exports.deleteAirport = (req, res, next) => {
    const { id } =req.params
    Airport.findByIdAndDelete( id )
        .then(airport => res.status(200).json({ airport, msg: 'Airport deleted'}))
        .catch(err => res.status(500).json({err}))
}
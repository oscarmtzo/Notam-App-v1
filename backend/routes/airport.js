const express = require('express')
const router = express.Router()

const {getAllAirports, createAirport, getOneAirport, updateAirport, deleteAirport} = require('../controller/airports.controllers')

//REST 
//CREATE AIRPORT
router.post('/airport', createAirport )

//READ AIRPORTS 
router.get('/airport', getAllAirports )

//READ AIRPORTS DETAIL
router.get('/airport/:id',getOneAirport)

//UPDATE AIRPORT
router.patch('/airport/:id',updateAirport)

//DELETE AIRPORT
router.delete('/airport/:id', deleteAirport)

module.exports = router
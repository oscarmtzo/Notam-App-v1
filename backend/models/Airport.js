const {Schema, model} = require('mongoose')

const airportSchema = new Schema (
    {
        title:{
          type: String,
          required: true
        }, 
        IATA: {
          type: String,
          required: true
        },
        ICAO: {
          type: String,
          required: true
        },
        NOTAM: String,
        geometry:{
          
          coordinates: [Number]
        }
      },
      {
        timestamps: true,
        versionKey: false
      }
)
module.exports= model('Airport', airportSchema)   
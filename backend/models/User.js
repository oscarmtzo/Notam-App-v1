const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')
const userSchema = new Schema (
    {
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        }
      },
      {
        timestamps: true,
        versionKey: false
      }
)
userSchema.plugin(PLM, {usernameField: "email"})
module.exports= model('User', userSchema)   
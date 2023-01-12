const {Schema, model, ObjectId} = require("mongoose")

const Track = new Schema({
  name: {type: String, required: true},
  user: {type: String},
  lyrics: {type: String},
  album: {type: String},
  file: {type: String},
  link: {type: String},
  color: {type: String}
})

module.exports = model('Track', Track)
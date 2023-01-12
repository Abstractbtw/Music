const User = require("../models/User")
const Track = require("../models/Track")

const { ObjectId } = require('mongodb')

const Service = {

    registration: async (req) => {
        const {email, name, hashPassword, telegram} = req
        const user = await User.create({ 
            email,
            name,
            password: hashPassword,
            telegram, 
        })
        return user.dataValues
    },

    login: async (req) => {
        const {email} = req
        return await User.findOne({email})
    },

    addTrack: async (req) => {
        const {name, user, lyrics, album, link, file, color} = req
        const track = await Track.create({ 
          name, 
          user, 
          lyrics,
          album,
          file,
          link,
          color,
        })
        return track.dataValues
    },

    getTracks: async () => {
        return await Track.find({}, {
            _id: 1, 
            name: 1, 
            user: 1, 
            lyrics: 1,
            album: 1, 
            file: 1,
            link: 1,
            color: 1,
          })
    },

}

module.exports = Service
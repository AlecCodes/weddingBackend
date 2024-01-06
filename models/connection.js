const mongoose = require('mongoose')
require('dotenv').config()


const {Schema, model} = mongoose

const rsvpSchema = new Schema({
    name: String,
    isAttending: Boolean,
    location: String,
    comments: String
})

const Rsvp = model("rsvp", rsvpSchema)

module.exports = Rsvp
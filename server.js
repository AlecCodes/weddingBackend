const express = require('express')
const app = express()
const PORT = 3000
require('dotenv').config()
const RSVP = require('./models/rsvp')


//middleware
app.use(express.json())

app.listen(PORT, () => console.log('LISTENING ON ' + PORT))
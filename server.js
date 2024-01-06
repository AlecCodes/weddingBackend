const express = require('express')
const app = express()
const PORT = 3000
require('dotenv').config()
const RSVP = require('./models/rsvp')


//middleware
app.use(express.json())

//controller
app.get("/", async (req,res) => {
    res.json( await RSVP.find({}))
})

app.post("/" , async (req,res) => {
    const newRsvp =  await RSVP.create(req.body)
    res.json(newRsvp)
})

app.listen(PORT, () => console.log('LISTENING ON ' + PORT))
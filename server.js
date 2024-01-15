const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3000
const cors = require('cors')
require('dotenv').config()
const RSVP = require('./models/rsvp')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user : "alec322@gmail.com",
        pass : "enmh ocej fhab gtej"
    }
})

const testEmail = {
    from: 'alec322@gmail.com',
    to: "laurensharvey@gmail.com",
    subject: "HELLO!",
    text: "hey bobiley I'm testing the email"
}

//middleware
app.use(cors())
app.use(express.json())

//controller
app.get("/", async (req,res) => {
    res.json( await RSVP.find({}))
})

app.post("/" , async (req,res) => {

    const newRsvp =  await RSVP.create(req.body)

    const rsvpEmail = {
        from : 'alec322@gmail.com',
        to: 'alec322@gmail.com',
        subject: `Hooray! ${newRsvp.name} just RSVP'd!`,
        html: `<h1>${newRsvp.name} ${(newRsvp.name) ? 'is Attending :)' : 'can not Attend T_T'}</h1>
            <h2>${newRsvp.location}</h2>
            <hr></hr>
            <label>They said:</label>    
            <p>${newRsvp.comments}</p> `
    
    }

    transporter.sendMail(rsvpEmail, (error, info) => {
        if (error){
            console.error("ERROR!!!: ", error)
        } else {
            console.log("EMAIL SENT: " , info.response)
        }
    })

    res.json(newRsvp)
})


app.listen(PORT, () => console.log('LISTENING ON ' + PORT))